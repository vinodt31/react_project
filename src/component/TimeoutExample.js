import React, {useState, useEffect} from "react";
import fetchWithTimeout from 'fetch-with-timeout';
import axios from "axios";

function TimeoutExample(){
  
  useEffect(()=>{
    axios({
      method: "get",
      url: 'https://dummyjson.com/products',
      timeout: 1000 * 5, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json"
      },
      /*data: {
        id: 1234
      }*/
    }).then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
    });
  },[]);
  
  
  return (
    <div>
      <h1>Timeout API Example</h1>
      

    </div>
  );
}

export default TimeoutExample;
