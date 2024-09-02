"use server";


import {storePost, updatePostLikeStatus} from "@/lib/posts";
import {redirect} from "next/navigation";
import {uploadImage} from "@/lib/cloudirary";
import {revalidatePath} from "next/cache";

export async function createPost(prevState, formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let error = [];
    if (!title || title.trim().length === 0) {
        error.push("title is required ")
    }

    if (!content || content.trim().length === 0) {
        error.push("content is required ")
    }

    if (!image) {
        error.push("image is required ")
    }

    if (error.length > 0) {
        return {error};
    }
    let imageUrl;
    try {
        imageUrl = await uploadImage(image);

    } catch (e) {
        throw new Error('Image upload failed');
    }
    await storePost({
        imageUrl: imageUrl,
        title,
        content,
        userId: 1
    })
    revalidatePath('/', 'layout');
    redirect('/feed');
    
}


export async function togglePostLikeStatus(postId) {
    await updatePostLikeStatus(postId, 2);
    revalidatePath('/', 'layout');
}