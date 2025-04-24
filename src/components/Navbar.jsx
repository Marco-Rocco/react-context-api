import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <NavLink to='/' className={'nav-link'}>Home Page </NavLink>
                <NavLink to='/chi-siamo' className={'nav-link'}>Chi Siamo </NavLink>
                <NavLink to='/post' className={'nav-link'}>Lista Post </NavLink>
            </nav>
        </>
    )
}
export default Navbar