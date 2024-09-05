import {PrismaClient} from '@prisma/client';


export async function createUser(email, username, password) {
    const user = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: password,
        },
    });
    return user.id;
}


export async function getUserByEmail(email) {
    return prisma.user.findFirst({
        where: {email: email},
    });
}