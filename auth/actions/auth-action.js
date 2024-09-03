'use server';

import {createUser, getUserByEmail} from "@/lib/user";
import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {redirect} from "next/navigation";
import {createAuthSession, destroySession} from "@/lib/auth";

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email';
    }

    if (password.trim().length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors: errors,
        }
    }
    const hashedPassword = hashUserPassword(password);
    try {
        const id = createUser(email, hashedPassword);
        await createAuthSession(id)
        redirect('/training');
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'email already exists'
                },
            }
        }
        throw error;
    }


}

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
        return {
            errors: {
                email: 'can not auth user'
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password);
    if (!isValidPassword) {
         return {
            errors: {
                password: 'wrong password'
            }
        }
    }
     await createAuthSession(existingUser.id)
        redirect('/training');

}

export async function auth(mode, prevState, formData) {
    if(mode === 'login'){
        return login(prevState, formData);
    } else {
        return signup(prevState,formData);
    }
}

export async function logout() {
    await destroySession();
    redirect('/');
}