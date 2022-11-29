//import {configureStore} from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'

import productSlice from "./productSlice";
import imageSlice from "./gallerySlice";

export default configureStore({
    reducer: {
        product: productSlice,
        gallery: imageSlice
    },
  })
  