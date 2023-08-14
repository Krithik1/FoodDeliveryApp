import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userLoggedIn";
import './NavBar.css';

function NavBarLoggedIn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className="NavBar">
            <div className="heading"><b>Food App</b></div>
            <div className="home">
                <Link className="home" to={"/"}> Home </Link>
            </div>
            <div className="accountinfologout">
                <Link className="accountinfo" to={"/accountinfo"}> Account Information </Link>
                <Link className="logout" to={"/"} onClick={handleLogout}> Logout </Link>
            </div>
        </div>
    );
}

export default NavBarLoggedIn;