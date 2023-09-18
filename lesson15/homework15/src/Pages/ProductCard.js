import React from "react";
import {useDispatch, useSelector} from "react-redux";

import "../Styles/ProductCard.css"
import {addToCart} from "../Redux/cartSlice";

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className={"block"}>
            {items.map((item) => (
                <div key={item.id}>
                    <img src={item.img} className={"img"} alt="" height={"240px"}/>
                    <div className={"cardInf"}>
                        <h5 className={"title"}>{item.title}</h5>
                        <p className={"title"}>{item.price}</p>
                        <button onClick={() => dispatch(addToCart(item))}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
