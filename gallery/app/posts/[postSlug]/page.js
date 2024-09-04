import {getPost} from "@/lib/post";
import {notFound} from "next/navigation";
import Image from 'next/image';
import classes from './page.module.css';


export default function PostsDetailPage({params}){
    const post = getPost(params.postSlug);

    if(!post){
        notFound();
    }

        post.instructions = post.instructions.replace(/\n/g, '<br/>');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={post.image} alt={post.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{post.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${post.creator_email}`}>{post.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {post.summary}
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions}
                   dangerouslySetInnerHTML={{
                       __html: post.instructions
                   }}
                >

                </p>
            </main>
        </>
    );
}