import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>Navebar</h2>
            <nav>
                <Link to={"/"}>Home</Link>
                {/* <a href="/">Home</a> */}
                <Link to={"/about"}>About</Link>
                {/* <a href="/about">About</a> */}
                <Link to={"/posts"}>Posts</Link>
                <Link to={"/user"}>User</Link>
                <Link to={"/contact"}>Contact</Link>
                {/* <a href="/contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;