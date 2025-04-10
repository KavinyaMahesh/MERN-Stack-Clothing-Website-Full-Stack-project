import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Collection from "./components/Collection";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout"; // Add this
import Login from "./components/Login";       // Add this
import Signup from "./components/Signup"; 
import Register from "./components/Register";
import StyleQuiz from "./components/StyleQuiz"; 
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/style-quiz" element={<StyleQuiz />} />


            </Routes>
        </div>
    );
};

export default App;


