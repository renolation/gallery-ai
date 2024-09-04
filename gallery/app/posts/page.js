import {getPosts} from "@/lib/post";
import PostsGrid from "@/components/posts/posts-grid";
import {Suspense} from "react";
import classes from './page.module.css'
import Link from "next/link";


async function Posts() {
    const posts = await getPosts();
    return <PostsGrid posts={posts}/>;
}


export default function PostsPage() {
    return (
        <main>
            <Link href={'/posts/create'}>ADD</Link>
            <Suspense fallback={
                <p className={classes.loading}>Fetching meals....</p>}>
                <Posts/>
            </Suspense>
        </main>
    );
}