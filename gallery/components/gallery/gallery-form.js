"use client";
import classes from "./gallery-form.module.css";

import {useFormState} from 'react-dom';
import {createGallery} from "@/actions/gallery-action";
import PostFormSubmit from "@/components/posts/post-form-submit";

export default function GalleryForm() {
    const [state, formAction] = useFormState(createGallery, {message: null});

    return (
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>
                <div className={classes.row}>
                    {/*name*/}
                    <p>
                        <label htmlFor="name">Gallery name</label>
                        <input type="text" id="name" name="name" required/>
                    </p>
                    {/*description*/}
                    <p>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description"/>
                    </p>
                </div>
                {state.message && <p>{state.message}</p>}
                <p className={classes.actions}>
                    <PostFormSubmit/>
                </p>
            </form>
        </main>
    );

}