import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addProduct, updateProduct} from "../../store/productSlice"

export default function ProductImage(){
    const {product} = useSelector((state)=>state)   
    const dispatch = useDispatch();
    
    return(
        <div>
        <h1>Product Image List</h1>
        
        </div>
    )
}