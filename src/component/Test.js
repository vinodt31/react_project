import React, {useEffect, useState} from "react";
import axios from "axios";

const menuData = [
  {
    title: 'Item 1',
    item_id:1,
    children: [
      {
        title: 'Item 1.1',
        item_id:2,
        children: [
          {
            title: 'Item 1.1.1',
            item_id:6,
          },
        ],
      },
      {
        title: 'Item 1.2',
        item_id:3,
      },
    ],
  },
  {
    title: 'Item 2',
    item_id:4,
    children: [
      {
        title: 'Item 2.1',
        item_id:5,
      },
    ],
  },
  {
      title: 'Item 3',
      item_id:4
    },
];

function Menu({items}){
  const [selectedMenu, setSelectedMenu] = useState({});
   return (
    <ul>
      {items.map((item)=>(
        <li>
          {item.title}
          {item.children && (<button onClick={()=>setSelectedMenu({...selectedMenu,[item.item_id]: !selectedMenu[item.item_id]})}>{selectedMenu[item.item_id] ? "-" : "+"}</button>)}
          {selectedMenu[item.item_id] && item.children && <Menu items = {item.children} />}
        </li>
      ))}
    </ul>
   )
}

function Productlist({getProduct, setProduct}){
 
  let updateProduct = (e, index)=>{
    console.log(index, e.target.name, e.target.value)
    let getUPdatedValue = getProduct.map((item,key)=>{
      if(key == index){
        return {...item, [e.target.name]:e.target.value}
      }else{
        return item;
      }
    })

    setProduct(getUPdatedValue);
  }

   return (
    <ul>
      {getProduct.map((item, index)=>(
        <li> {item.title} || {item.price} <input name="price" onChange={(e)=>updateProduct(e,index)} value={item.price} /></li>
      ))}
    </ul>
   )
}

export default function Test(){
  const [getMenu, setMenu] = useState(menuData)
  const [getProduct, setProduct] = useState([])
  let getProductList = async ()=>{
      await axios({
        url:"https://dummyjson.com/products",
        method:"get",
        data: ""
      }).then(result=>{
        setProduct(result.data.products);
      });
  }

  useEffect(()=>{
    getProductList()
  },[])


  return (
    <div>
      <h1>Test</h1>
      <h2>Menu</h2>
      <Menu items = {getMenu} />
      <Productlist getProduct={getProduct} setProduct={setProduct} />
    </div>
  )
}