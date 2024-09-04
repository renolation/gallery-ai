import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { getPosts } from "@/app/lib/post";
import PostGrid from "@/components/posts/post-grid";
import React from "react";

async function Posts(): JSX.Element {
  const posts = await getPosts();
  return <>
    <PostGrid posts={posts} />
  </>;
}

export default function AboutPage() {

  return (
    <>
      <div>
        <h1 className={title()}>About</h1>
        <Posts />
      </div>
    </>
  );
}
