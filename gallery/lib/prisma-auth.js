import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserPrisma(email, password) {
    const user = await prisma.user.create({
        data: {
            email: email,
            password: password,
        },
    });
    return user.id;
}

