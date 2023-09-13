import React from 'react';

function NavHero() {
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
                className={"inline-flex h-[1080px] max-w-[800px] flex-col justify-center items-start px-0 py-[340px];"}>
                <div
                    className={"flex flex-col items-center pl-[275px] pr-[274px] py-2 text-[#00DF9A] text-center text-base not-italic font-bold font-family: Roboto;"}>GROWING
                    WITH DATA ANALYTICS
                </div>

            </div>
        </div>
    );
}

export default NavHero;