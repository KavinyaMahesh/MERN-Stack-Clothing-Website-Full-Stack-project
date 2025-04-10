import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
