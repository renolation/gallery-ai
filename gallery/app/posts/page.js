import {getPosts} from "@/lib/post";
import PostsGrid from "@/components/posts/posts-grid";


async function Posts() {
    const posts = await getPosts();
    return <PostsGrid posts={posts}/>;
}



export default function PostsPage(){
    return (
        <main>
            <Posts/>
        </main>
    );
}