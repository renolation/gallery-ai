import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meet ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meet up</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;