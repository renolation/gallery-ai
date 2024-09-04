'use client';

import classes from "./create-form.module.css";
import ImagePicker from "@/components/posts/image-picker";
import PostFormSubmit from "@/components/posts/post-form-submit";
import {useFormState} from "react-dom";
import {sharePost} from "@/actions/post-action";


export default function CreateForm(){

        const [state, formAction] = useFormState(sharePost, {message: null});

    return (
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>
                <div className={classes.row}>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required/>
                    </p>
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required/>
                    </p>
                </div>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required/>
                </p>
                <p>
                    <label htmlFor="summary">Short Summary</label>
                    <input type="text" id="summary" name="summary" required/>
                </p>
                <p>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        rows="10"
                        required
                    ></textarea>
                </p>
                <ImagePicker label="Your image" name="image"/>
                {state.message && <p>{state.message}</p>}
                <p className={classes.actions}>
                    <PostFormSubmit/>
                </p>
            </form>
        </main>
    );
}