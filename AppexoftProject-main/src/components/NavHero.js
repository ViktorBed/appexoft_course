import React from 'react';
import {useTypewriter} from "react-simple-typewriter";

function NavHero() {
    const {text} = useTypewriter({
        words: ["BTB", "BTC", "SASS"],
        loop: {},
    });
    return (
        <div className={"bg-black w-full h-[1080px] flex justify-center flex-col items-center"}>
            <div className={"bg-red-950 justify-between p-4 w-[1240px] h-24 flex items-center"}>
                <div className={" text-[#00DF9A] text-3xl not-italic font-bold font-family: Roboto;"}>REACT.</div>
                <nav className={"flex gap-4 text-white text-[15px] not-italic font-normal font-family: Roboto;"}>
                    <div>Home</div>
                    <div>Company</div>
                    <div>Resources</div>
                    <div>About</div>
                    <div>Contact</div>
                </nav>
            </div>
            <div
                className={" items-center flex h-[1080px] max-w-[800px] flex-col justify-center px-0 py-[340px];"}>
                <div
                    className={"flex flex-col items-center   py-2 text-[#00DF9A] text-center text-base not-italic font-bold max-w-2xl font-family: Roboto;"}>GROWING
                    WITH DATA ANALYTICS
                </div>
                <div className={" mb-5 text-white text-center text-7xl not-italic font-bold font-family: Roboto;"}>
                    Grow with data.
                </div>
                <div className={"text-white text-center text-[47px] not-italic font-bold font-family: Roboto;"}>Fast,
                    flexible financing for
                    <span> {text}</span>
                </div>
                <div
                    className={"mb-5 text-gray-500 text-center text-2xl not-italic font-bold leading-8 font-family: Roboto;"}>
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS
                    platforms.
                </div>
                <form
                    className={" bg-emerald-400 flex w-[200px] flex-col items-center pl-[59px] pr-[59px] py-3 rounded-md ;"}>
                    <input className={"text-center text-base not-italic font-medium color: #000 font-family: Roboto;"}
                           type={"button"} value={"Get Started"}/>
                </form>
            </div>
        </div>
    );
}

export default NavHero;