import { Routes, Route } from "react-router-dom";

import "./index.css"
import Navbar from "./pages/Navbar";
import ProductCard from "./pages/ProductCard";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

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

