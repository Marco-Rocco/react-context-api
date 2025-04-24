import { useEffect } from "react";

function ChiSiamo() {
    useEffect(() => {
        console.log('mount di ChiSiamo');
        return () => {
            console.log('unmount di ListaPost')
        }
    })

    return (
        <>
            <div>Chi Siamo</div>
        </>
    )
}
export default ChiSiamo