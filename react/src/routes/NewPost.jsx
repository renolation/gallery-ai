import classes from './NewPost.module.css';
import {useState} from 'react';
import Modal from "../components/Modal.jsx";
import {Link, useNavigate} from "react-router-dom";

function NewPost({onAddPost}) {


    const [enteredBody, setEnteredBody] = useState('a');
    const [enteredAuthor, setEnteredAuthor] = useState('b');



    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={changeAuthorHandler}/>
                </p>
                <p className={classes.actions}>
                    <Link type="button" to="/">Cancel</Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;