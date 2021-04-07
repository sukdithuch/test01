import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cloth">เสื้อผ้า</NavLink></li>
                        <li><NavLink to="/shoes">รองเท้า</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;