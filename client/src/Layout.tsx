import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import NavBarLoggedIn from "./components/NavBarLoggedIn/NavBarLoggedIn";

export default function Layout() {
    const { user } = useSelector((state: any) => state.userLoggedIn);
    return (
        <>
        {user === ""? <NavBar /> : <NavBarLoggedIn />}
        <Outlet></Outlet>
        </>
    );
}