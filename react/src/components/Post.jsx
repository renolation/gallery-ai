import classes from './Post.module.css'
import {Link} from "react-router-dom";

function Post(props) {
    return (
        <div className="{classes.post}">
            <Link to={props.id}>
                <p>{props.author}</p>
                <p>{props.body}</p>
            </Link>
        </div>
    );
}

export default Post;