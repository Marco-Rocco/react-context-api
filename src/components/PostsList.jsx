import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const PostsList = () => {
    const { posts } = useContext(GlobalContext);


    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="card">
                    <div><strong>{post.title}</strong></div>
                    <p>{post.body}</p>

                    <Link to={`/post/${post.id}`}> Mostra post </Link>
                </div>

            ))}
        </>
    );
};

export default PostsList;