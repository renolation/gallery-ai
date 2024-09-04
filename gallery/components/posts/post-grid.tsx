import PostItem from "@/components/posts/post-item";

export default function PostsGrid({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem {...post} />
        </li>
      ))}
    </ul>
  );
}