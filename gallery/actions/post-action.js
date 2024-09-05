'use server';

import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {createPost} from "@/lib/prima-posts";
import {uploadImage} from "@/lib/cloudirary";
import {verifyAuth} from "@/lib/auth";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function sharePost(prevState, formData) {

    const authResult = await verifyAuth();
    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        image: formData.get('image'),
        userId: authResult.user.id,
    }

    if (
        isInvalidText(post.title) ||
        isInvalidText(post.description) ||
        !post.image ||
        post.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }

    let imageUrl;
    try {
        imageUrl = await uploadImage(post.image);

    } catch (e) {
        throw new Error('Image upload failed');
    }

    console.log(post);
    await createPost(post.title, post.description, imageUrl, post.userId);
    redirect('/posts');
}

