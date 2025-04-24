import { useEffect } from "react"


function HomePage() {

    useEffect(() => {
        console.log('mount di homepage');
        return () => {
            console.log('unmount di ListaPost')
        }
    })

    return (
        <>
            <div>HomePage </div>
        </>
    )
}
export default HomePage




// useEffect(() => {
//     console.log('homepage');
//     return (() => {
//         console.log('unmount homepage')
//     })
// })