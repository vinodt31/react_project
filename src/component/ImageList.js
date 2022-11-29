import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPhotos} from "../store/gallerySlice";


export default function ImageList(){
    const photos = useSelector((state)=>state.gallery.photos)   
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPhotos());
    },[dispatch]);

    console.log(photos);

    return(
        <div>
        <h1>Image List</h1>
        <div>
            {photos.map((item)=>(
                <div className='image_gallery'><img width="300" height="200" src={item.download_url} /></div>
            ))}
            
        </div>
        
        
        </div>
    )
}