import {Route, Routes} from "react-router-dom";

import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Layout from "./Componetns/Layout";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={'/products'} element={<AllProducts/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
