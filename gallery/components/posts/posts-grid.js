import PostItem from "@/components/posts/post-item";
import classes from "./posts-grid.module.css";


export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.meals}>
      {posts.map(post => (
        <li key={post.id}>
          <PostItem {...post} />
        </li>
      ))}
    </ul>
  );
}