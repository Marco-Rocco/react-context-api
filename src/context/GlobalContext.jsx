import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const endPoint = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(endPoint).then(res => {
            setPosts(res.data)
            console.log(posts)
        })

    }, [])


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