

 export async function createPost(title, description, imageUrl, userId) {
    const post = await prisma.post.create({
        data: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            userId: userId
        },
    });
    return post;
}