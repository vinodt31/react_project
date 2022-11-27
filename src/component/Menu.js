import React, { useState } from 'react';

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
];

function MenuList({items}){
  const [getMenue,setMenu] = useState({});
  return (
     <ul>
      {items.map((item) =>(
            <li key={item.item_id}>
              {item.title}
              {item.children && (<button onClick={()=>setMenu({...getMenue,[item.item_id]: !getMenue[item.item_id]})}>
                {getMenue[item.item_id] ? "-" : "+"}</button>)}
              {getMenue[item.item_id] && item.children && <MenuList items={item.children} />}
            </li>
      ))}
    </ul>
  )
}


function Menu() {

  return (
    <div className="home">
      <h1>Menu page</h1>
      
      <MenuList items={menuData} />
    </div>
  );
}

export default Menu;
