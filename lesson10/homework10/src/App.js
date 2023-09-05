import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css'
import ANewHope from "./Pages/A_New_Hope";
import AttackOfTheClones from "./Pages/Attack_of_the_Clones";
import ReturnOfTheJedi from "./Pages/Return_of_the_Jedi";
import RevengeOfTheSith from "./Pages/Revenge_of_the_Sith";
import TheEmpireStrikesBack from "./Pages/The_Empire_Strikes_Back";
import ThePhantomMenace from "./Pages/The_Phantom_Menace";
import Layout from "./Components/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/ANewHope'} element={<ANewHope/>}/>
                    <Route path={'/AttackOfTheClones'} element={<AttackOfTheClones/>}/>
                    <Route path={'/ReturnOfTheJedi'} element={<ReturnOfTheJedi/>}/>
                    <Route path={'/RevengeOfTheSith'} element={<RevengeOfTheSith/>}/>
                    <Route path={'/TheEmpireStrikesBack'} element={<TheEmpireStrikesBack/>}/>
                    <Route path={'/ThePhantomMenace'} element={<ThePhantomMenace/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;