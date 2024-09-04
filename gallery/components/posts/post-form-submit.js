'use client';

import {useFormStatus} from "react-dom";

export default function PostFormSubmit() {
    const {pending} = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? 'Sending...' : 'Share Post'}
        </button>
    );
}