import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addProduct, updateProduct} from "../../store/productSlice"

function ProductList({products}){

    return (
         products.map((item) =>(
               <div>name : {item.product} : Qty. {item.qty}</div>
         ))
     )
}

export default function AddProduct(){
    const {product} = useSelector((state)=>state)   
    const dispatch = useDispatch();
    const [getProduct, setProduct] = useState({});

    const submitProduct = ()=>{
        dispatch(addProduct(getProduct));
    };

    return(
        <div>
        <h1>Add Product</h1>
        {getProduct.product} || {JSON.stringify(product)}
        <div>Product Name: <input type="text" name="product" onChange={(e)=>setProduct({...getProduct,product: e.target.value})} value={getProduct.product} /></div>
        <div>Product Qty.: <input type="text" name="qty" onChange={(e)=>setProduct({...getProduct,qty: e.target.value})} value={getProduct.qty} /></div>
        <div><button type="text" onClick={submitProduct}>Add Product</button> </div>


        <h1>Product List</h1>
        
        <ProductList products={product} />
        </div>
    )
}