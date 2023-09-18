import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getCartTotal} from "../Redux/cartSlice";
import "../Styles/Navbar.css"
import "../Styles/keyframes.css"

export default function App() {
    const {cart, totalQuantity} = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    return (
        <nav>
            <div className={"navBar"}>
                <span className={"Nav"}>Navbar</span>
                <span className={"link"}>
          <NavLink to="/">All Product</NavLink>
        </span>
                <button className={"link"}>
                    <NavLink to="/cart">Cart({totalQuantity})</NavLink>
                </button>
            </div>
        </nav>
    );
}