import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProductCard.css"
import { addToCart } from "../redux/cartSlice";

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();
    const add = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div className="block">
            {items.map((item) => (
                <div key={item.id}>
                    <img src={item.img} className="img" alt=""/>
                    <div className="cardInf">
                        <h5 className="title">{item.title}</h5>
                        <p className="title">{item.price}</p>
                        <button onClick={() => add(item)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
