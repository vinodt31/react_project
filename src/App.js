import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import Menu from "./component/Menu";
import Test from "./component/Test";
import Hoctest from "./component/Hoctest";
import Product from "./component/product/Product";
import AddProduct from './component/product/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | 
           <Link to="/menu">Menue</Link> | 
           <Link to="/test">Test</Link> | 
           <Link to="/hoctest">HOC</Link> | 
           <Link to="/product">Redux Product</Link> | 
           <Link to="/add_product">Add Product</Link>
        
      </nav>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/hoctest" element={ <Hoctest /> } />
            <Route path="/product" element={ <Product /> } />
            <Route path="/add_product" element={ <AddProduct /> } />
        </Routes>
    </BrowserRouter>
);
}

export default App;
