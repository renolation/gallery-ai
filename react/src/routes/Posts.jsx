import '../App.css'
import PostsList from "../components/PostsList.jsx";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import {Outlet} from "react-router-dom";

function Posts() {


    return (
        <>
            <Outlet/>
            <main>
                <PostsList/>
            </main>
        </>
    )
}

export default Posts

export async function loader() {
    const data = await fetch('http://localhost:8080/posts');
    const postsData = await data.json();
    return postsData.posts;
}
