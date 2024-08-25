import {MdMessage, MdPostAdd} from "react-icons/md";
import classes from "./MainHeader.module.css";
import {Link} from "react-router-dom";

function MainHeader() {
    return (
        <header>
            <h1 className={classes.header}>
                <MdMessage/> React Header
            </h1>
            <p>
                <Link className={classes.button}
                    to='/new-post'
                >
                    <MdPostAdd size={18}/>
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;
