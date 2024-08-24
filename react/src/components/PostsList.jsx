import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.module.jsx";

function PostsList({isPosting, onStopPosting}) {

    const [enteredBody, setEnteredBody] = useState('a');
    const [enteredAuthor, setEnteredAuthor] = useState('b');


    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }


    return (
        <>
            {isPosting && <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            </Modal>}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="phuoc" body="abc"/>
            </ul>
        </>
    )
}

export default PostsList;