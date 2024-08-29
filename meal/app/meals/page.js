import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";


export default async function MealsPage() {

    const meals =await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, Delivered to Your Door {' '}
                    <span className={classes.highlight}>Every Week</span>
                </h1>
                <p>Choose your favorite and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>Share your fav recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals}/>
            </main>
        </>
    );
}