import PostListItem from "../list/PostListItem";
import { Link } from "react-router-dom";

export default function PostList({ posts, onDelete }) {
    if (!Array.isArray(posts)) {
        return <p>게시글이 없습니다.</p>;
    }

    return (
        <div>
        {posts.map((post) => (
            <Link to={`/post/${post.id}`}>

            <div key={post.id}>
                <PostListItem post={post} onDelete={onDelete}/>
            </div>

            </Link>
        ))}
        </div>
    );
}