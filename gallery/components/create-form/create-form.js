'use client';

import classes from "./create-form.module.css";
import ImagePicker from "@/components/posts/image-picker";
import PostFormSubmit from "@/components/posts/post-form-submit";
import {useFormState} from "react-dom";
import {sharePost} from "@/actions/post-action";


export default function CreateForm() {

    const [state, formAction] = useFormState(sharePost, {message: null});

    return (
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>

                <p>
                    <label htmlFor="title">Your title</label>
                    <input type="text" id="title" name="title" required/>
                </p>

                <p>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
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