import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [getProducts, setProducts] = useState([]);

  const fetchProducts = () => {
    //const { data } = Axios.get("https://dummyjson.com/products");
    //setProducts(data.products);
    console.log("call start")
    Axios({
      url: "https://dummyjson.com/products",
      method:"get"
    }).then(result=>{
      console.log("call start 1")
      setProducts(result.data.products);
    });

    console.log("call start2")
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = (e, index) => {
    const getDataList = [...getProducts];
    const updateData = getDataList.map((product, i) => {
      if (i == index) {
        return { ...product, [e.target.name]: e.target.value };
      } else {
        return product;
      }
    });
    setProducts(updateData);
  };

  return (
    <div>
      {getProducts.map((product, index) => (
        <div key={product.id}>
          <div>
            Name :{" "}
            <input
              onChange={(e) => updateProduct(e, index)}
              type="text"
              name="title"
              value={product.title}
            />{" "}
          </div>
          <div>
            Name :{" "}
            <input
              onChange={(e) => updateProduct(e, index)}
              type="text"
              name="price"
              value={product.price}
            />{" "}
          </div>
          <div>
            <img src={product.thumbnail} />{" "}
          </div>
        </div>
      ))}
    </div>
  );
      }

export default Home;
