import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import Menu from "./component/Menu";
import Test from "./component/Test";
import Hoctest from "./component/Hoctest";
import Product from "./component/product/Product";
import AddProduct from './component/product/AddProduct';
import ImageList from './component/ImageList';
import ReducerExample from "./component/ReducerExample"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | 
           <Link to="/menu">Menue</Link> | 
           <Link to="/test">Test</Link> | 
           <Link to="/hoctest">HOC</Link> | 
           <Link to="/product">Redux Product</Link> | 
           <Link to="/add_product">Add Product</Link> | 
           <Link to="/gallery">Image Gallary</Link> |
           <Link to="/reducer_example">Reducer hook</Link>
        
      </nav>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/hoctest" element={ <Hoctest /> } />
            <Route path="/product" element={ <Product /> } />
            <Route path="/add_product" element={ <AddProduct /> } />
            <Route path="/gallery" element={ <ImageList /> } />
            <Route path="/reducer_example" element={ <ReducerExample /> } />
        </Routes>
    </BrowserRouter>
);
}

export default App;
