import { Routes, Route } from "react-router-dom";

import "./index.css"
import Navbar from "./Pages/Navbar";
import ProductCard from "./Pages/ProductCard";
import CartPage from "./Pages/cartPage";
import NotFound from "./Pages/NotFound";

function App() {
    return (
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ProductCard/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </div>
    );
}

export default App;

