"use server";
import classes from './page.module.css';
import CreateForm from "@/components/create-form/create-form";
import {verifyAuth} from "@/lib/auth";
import {redirect} from "next/navigation";


export default async function CreatePost(){

    const result = await verifyAuth();
    if (!result.user) {
        return redirect('/')
    }


    return <>
        <header className={classes.header}>
            <h1>
                Share your <span className={classes.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
        </header>
        <CreateForm />


    </>
}