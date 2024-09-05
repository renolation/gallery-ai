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

export async function saveGallery(name, description) {

    const existingGallery = await prisma.gallery.findFirst({
        where: {name: name},
    });

    if (existingGallery) {
        return {message: 'Gallery with this name already exists.'};
    }

    const gallery = await prisma.gallery.create({
        data: {
            name: name,
            description: description,
        },
    });
    console.log(gallery);
    return {message: 'Gallery created successfully.', gallery};

}