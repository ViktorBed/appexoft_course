import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import "../Styles/Style.css"

const Layout = () => {
    const cartItem = useSelector(state => state.cart.cart)
    return (
        <>
            <div className={"navBar"}>
                <NavLink to={"/"}>NavBar</NavLink>
                <NavLink to={"/products"}>All product</NavLink>
                <NavLink to={"/cart"}>Cart({cartItem.length})</NavLink>
            </div>
                <Outlet/>
        </>
    );
}

export default Layout;