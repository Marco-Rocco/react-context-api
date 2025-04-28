import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const endPoint = 'https://jsonplaceholder.typicode.com/posts'

    function fetchPosts() {
        axios.get(endPoint)
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => console.error(err))
    }

    useEffect(fetchPosts, [])


    useEffect(() => {
        console.log(posts); // Qui avrai il valore aggiornato di posts
    }, [posts]);


    return (
        <>
            <GlobalContext.Provider value={{ posts }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}




// const [posts, setPosts] = useState([])