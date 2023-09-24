import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../redux/cartSlice";
import "./Navbar.css"

export default function App() {
    const {cart, totalQuantity} = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <nav>
            <div className="navBar">
                <span className="Nav">Navbar</span>
                <span className="link">
                      <NavLink to="/">All Product</NavLink>
                </span>
                <button className="link">
                    <NavLink to="/cart">Cart({totalQuantity})</NavLink>
                </button>
            </div>
        </nav>
    );
}