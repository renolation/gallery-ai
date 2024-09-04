import {redirect} from "next/navigation";


export async function auth(mode, prevState, formData) {
    if(mode === 'login'){
        return login(prevState, formData);
    } else {
        return signup(prevState,formData);
    }
    return;
}

export async function logout() {
    await destroySession();
    redirect('/');
}