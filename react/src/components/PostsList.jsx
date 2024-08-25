import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost.jsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";

function PostsList() {


    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const data = await fetch('http://localhost:8080/posts');
            const postsData = await data.json();
            console.log('data', postsData);
            setPosts(postsData.posts);
            setIsFetching(false);
            console.log('old', posts);

        }

        fetchPosts();
    }, []);


    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>

            {!isFetching && posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author}
                                           body={post.body}/>
                )}
            </ul>}
            {posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'red'}}>
                    <h1>No posts yet</h1>
                </div>
            }
            {isFetching && <p style={{textAlign: 'center', color: 'red'}}>Loading</p>}

        </>
    )
}

export default PostsList;