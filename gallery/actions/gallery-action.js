'use server';



import {saveGallery} from "@/lib/prisma-gallery";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function createGallery(prevState, formData) {
    const gallery = {
        name: formData.get('name'),
        description: formData.get('description'),
    }
    if (
        isInvalidText(gallery.name) ||
        isInvalidText(gallery.description)
    ) {
        return {
            message: 'Invalid input.',
        };
    }
    console.log(gallery);
    const result = await saveGallery(gallery.name, gallery.description);
    if (result.message === 'Gallery with this name already exists.') {
        return { message: result.message };
    } else {
        revalidatePath('/gallery');
        redirect('/gallery');
        // return { message: 'Gallery created successfully.' };
    }

}
