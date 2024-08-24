import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.module.jsx";

function PostsList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [...existingPosts, postData]);
    }

    return (
        <>
            {isPosting && <Modal onClose={onStopPosting}>
                <NewPost
                    onAddPost={addPostHandler}
                    onCancel={onStopPosting}
                />
            </Modal>}
            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author}
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