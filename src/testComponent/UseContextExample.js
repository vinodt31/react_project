import React, {useContext, useState} from "react"
import {contextProductDetails} from "./context"

function AddProduct(){
  const userDetails = useContext(contextProductDetails)
  console.log(userDetails)
  return(
    <div>
      <div>User first name : {userDetails.fname}</div>
      <div>User last name : {userDetails.lname}</div>
      <div>User email name : {userDetails.email}</div>
      <h1>Add Product</h1>


    </div>
  )
}


function ProductList(){
  const userDetails = useContext(contextProductDetails)
  console.log(userDetails)
  return(
    <div>
      <div>User first name : {userDetails.fname}</div>
      <div>User last name : {userDetails.lname}</div>
      <div>User email name : {userDetails.email}</div>
      <h1>Product List</h1>


    </div>
  )
}

function Product(){
 
  return(
    <div>
      <contextProductDetails.Provider value={{"fname":"vinod","lname":"tiwari","email":"vinodt31@gmail.com"}}>
        <h1>Context API Example</h1>
        <ProductList />
        <AddProduct />
      </contextProductDetails.Provider>
      
    </div>
  )
}

export default Product