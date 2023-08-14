import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="heading"><b>Food App</b></div>
            <div className="home">
                <Link className="home" to={"/"}> Home </Link>
            </div>
            <div className="loginregister">
                <Link className="login" to={"/login"}> Login </Link>
                <Link className="register" to={"/register"}> Register </Link>
                {/* <button className="register">Register</button> */}
            </div>
        </div>
    );
}

export default NavBar;