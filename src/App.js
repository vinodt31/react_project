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
import Timer from "./component/Timer";
import UploadImage from './component/product/UploadImage';
import Updateobject from './component/Updateobject';
import TimeoutExample from './component/TimeoutExample';

function App() {
  return (
    <BrowserRouter>
      <nav>
            <Link to="/home">Home</Link> | 
           <Link to="/menu">Menue</Link> | 
           <Link to="/hoctest">HOC</Link> | 
           <Link to="/product">Redux Product</Link> | 
           <Link to="/add_product">Add Product</Link> | 
           <Link to="/gallery">Image Gallary</Link> |
           <Link to="/reducer_example">Reducer hook</Link>
           <Link to="/timer">Timer</Link>
           <Link to="/upload_image">Upload Image</Link>

           <Link to="/test">Test</Link> | 
           <Link to="/api_timeout">Timeout API</Link> | 
           <Link to="/update_object">Update Object</Link> | 
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
            <Route path="/timer" element={ <Timer /> } />
            <Route path="/upload_image" element={ <UploadImage /> } />
            <Route path="/api_timeout" element={ <TimeoutExample /> } />
            <Route path="/update_object" element={ <Updateobject /> } />
            
        </Routes>
    </BrowserRouter>
);
}

export default App;
