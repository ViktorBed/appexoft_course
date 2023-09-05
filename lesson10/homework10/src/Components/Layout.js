import React from "react";
import { NavLink, Outlet} from "react-router-dom";

import '../App.css'

const Layout=()=> {
    return (
        <>
            <div className={'header'}>
                <NavLink to="/ANewHope">A New Hope</NavLink>
                <NavLink to="/AttackOfTheClones">Attack Of The Clones</NavLink>
                <NavLink to="/ReturnOfTheJedi">Return Of The Jedi</NavLink>
                <NavLink to="/RevengeOfTheSith">Revenge Of The Sith</NavLink>
                <NavLink to="/TheEmpireStrikesBack">The Empire Strikes Back</NavLink>
                <NavLink to="/ThePhantomMenace">The Phantom Menace</NavLink>
            </div>
                <div className={'bg'}></div>
            <Outlet/>
        </>
    );
}

export default Layout;