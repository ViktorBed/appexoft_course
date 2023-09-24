import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./CartPage.css";
import "./media.css"
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../redux/cartSlice";

const CartPage = () => {
    const {cart, totalQuantity, totalPrice} = useSelector(
        (state) => state.allCart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const remove =(data)=>{
        dispatch(removeItem(data.id))
    }

    const decrease =(data)=>{
        dispatch(decreaseItemQuantity(data.id))
    }

    const increase=(data)=>{
        dispatch(increaseItemQuantity(data.id))
    }

    return (
        <div className="cartBlock">
            <div className="cart">
                <div className="name">
                    <h5>Cart - {cart.length} items</h5>
                </div>
                <div className="hr"></div>
                <div className={"card"}>
                    {cart?.map((data) => (
                        <div className="list" key={data.id}>
                            <div className="box">
                                <div>
                                    <div>
                                        <img className="newImg" src={data.img} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        <strong className="cartName">{data.title}</strong>
                                    </p>
                                    <button className="trash"
                                            type="button"
                                            data-mdb-toggle="tooltip"
                                            title="Remove item"
                                            onClick={() => remove(data)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="numbs">
                                <div className="plusMinus">
                                    <button className="button" onClick={() => decrease(data)}>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Edit / Remove_Minus">
                                                <path id="Vector" d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                    </button>
                                    <div>
                                        <input
                                            id="form1"
                                            value={data.quantity}
                                            type="number"
                                            className="form"
                                            onChange={() => null}/>
                                        <label className="quantity">
                                            Quantity
                                        </label>
                                    </div>
                                    <button className="button" onClick={() => increase(data)}>
                                        <svg className="icon" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Edit / Add_Plus">
                                                <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="white"
                                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <p>
                                    <strong className="price">{data.price}</strong>
                                </p>
                            </div>
                            <div className="hr2"></div>
                        </div>
                    ))}
                </div>
                <div className="leftBottom"></div>
            </div>
            <div className="rightBlock">
                <div>
                    <h5>Summary</h5>
                </div>
                <div className="hr3"></div>
                <div className="bottom">
                    <div className="length">
                        <div className="total">Total Quantity
                            <span>{totalQuantity}</span>
                        </div>
                        <div className="total">
                            <div>
                                <strong>Total amount</strong>
                            </div>
                            <span>
                                <strong>{totalPrice}</strong>
                            </span>
                        </div>
                    </div>
                    <button className="checkout" type="button">
                        Go to checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;