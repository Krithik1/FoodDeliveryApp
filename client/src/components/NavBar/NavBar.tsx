import React from "react";
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="heading"><b>Food App</b></div>
            <div className="home">Home</div>
            <div className="loginregister">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>
    );
}

export default NavBar;