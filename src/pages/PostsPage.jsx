import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ListaPost() {

    const [posts, setPosts] = useState([])
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        console.log('mount di ListaPost')
        return () => {
            console.log('unmount di ListaPost')
        }
    })

    function fetchPosts() {
        axios.get(endpoint)
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => console.error(err))
    }

    useEffect(fetchPosts, [])

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
    )
}
export default ListaPost