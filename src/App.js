import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Categories from './pages/Categories';
import './App.css';
import Cart from './pages/Cart';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Product />} />
    <Route path="categories" element={<Categories />} />
    <Route path='cart' element={<Cart/>}/>


  </Routes>
);

export default App;
