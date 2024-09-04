import classes from "./main-header.module.css";
import NavLink from "@/components/header/nav-link";


export default function MainHeader() {
    return (
        <header className={classes.header}>
            <h1>Next Meals</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={'/posts'}>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/community'}>Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}