import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

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
    return {message: 'Gallery created successfully.', gallery};
}

export async function getGalleries() {
    return prisma.gallery.findMany();
}