//import {createSlice} from "@reduxjs/toolkit";
import {createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers:{
        addProduct(state, action){
            console.log(state," : reducer : ",action.payload);
            state.push(action.payload);
        },
        updateProduct(state, action){
            state.filter((item)=>item.id !== action.payload.id);
        }
    }
});

export const {addProduct, updateProduct} = productSlice.actions;
export default productSlice.reducer;