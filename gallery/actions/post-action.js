'use server';

import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function sharePost(prevState, formData) {
    const post = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isInvalidText(post.title) ||
        isInvalidText(post.summary) ||
        isInvalidText(post.instructions) ||
        isInvalidText(post.creator) ||
        isInvalidText(post.creator_email) ||
        !post.creator_email.includes('@') ||
        !post.image ||
        post.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }
    console.log(post);
    // await savePost(post);
    revalidatePath('/posts');
    redirect('/posts');
}