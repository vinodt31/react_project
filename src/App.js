import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import Menu from "./component/Menu";
import Test from "./component/Test";
import Hoctest from "./component/Hoctest";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menue</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/hoctest">HOC</Link>
        </li>
      </ul>

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/hoctest" element={ <Hoctest /> } />
        </Routes>
    </BrowserRouter>
);
}

export default App;
