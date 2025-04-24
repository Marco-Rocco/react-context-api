import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";



export default function SinglePost() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState(null)

    const [prevPost, setPrevPost] = useState(0)
    const [nextPost, setNextPost] = useState(0)



    const { id } = useParams();

    const singlePostEndpoint = `https://jsonplaceholder.typicode.com/posts/${id}`

    function showSinglePost() {
        setLoading(true);
        axios.get(singlePostEndpoint)
            .then(response => {
                setNextPost(parseInt(id) + 1)
                setPrevPost(parseInt(id) - 1)
                setLoading(false)
                setPost(response.data)

            })
    }

    useEffect(showSinglePost, [id])


    if (loading) {
        return (
            <>
                <div>Caricamento in corso...</div>
            </>
        )
    }

    return (
        <>
            <div key={post.id} className="card">
                <div><strong>{post.title}</strong></div>
                <p>{post.body}</p>

                <Link to={`/post/${prevPost}`} >Vai al post precedente </Link>
                <Link to={`/post/${nextPost}`} >Vai al post successivo</Link>

            </div>
        </>
    )
} 