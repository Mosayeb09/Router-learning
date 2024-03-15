import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>Navebar</h2>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                {/* <Link to={"/"}>Home</Link> */}
                {/* <a href="/">Home</a> */}
                <NavLink to={"/about"}>About</NavLink>
                {/* <a href="/about">About</a> */}
                <NavLink to={"/posts"}>Posts</NavLink>
                <NavLink to={"/user"}>User</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                {/* <a href="/contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;