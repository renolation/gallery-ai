import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost.jsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";
import {useLoaderData} from "react-router-dom";

function PostsList() {

    const posts = useLoaderData();

    return (
        <>

            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body}
                                           id={post.id}
                                           author={post.author}
                                           body={post.body}/>
                )}
            </ul>}
            {posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'red'}}>
                    <h1>No posts yet</h1>
                </div>
            }

        </>
    )
}

export default PostsList;