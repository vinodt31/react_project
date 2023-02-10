import React, { useState, useEffect } from "react";
import Axios from "axios";

const objList = {"workflowId":"7561491","taskId":"3604477","userId":"5505194","taskName":"Enter personal Information","taskDescription":"Please enter your personal information to register","version":"1.0","previousTaskId":"1982165","nextTaskRef":"4511525","nodes":[{"node":{"appearanceIndex":"1","type":"Group","id":"9413156","minInstance":"1","maxInstance":"1","groupLabel":"Please Enter your name","childNodes":[{"node":{"appearanceIndex":"2","id":"5074490","type":"valueNode","label":"First Name","minLength":"3","maxLength":"30","placeHolderText":"Enter First name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":"f name"}}},{"node":{"appearanceIndex":"2","id":"5074391","type":"valueNode","label":"Middle Name","minLength":"3","maxLength":"30","placeHolderText":"Enter Middle name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"2","id":"5074392","type":"valueNode","label":"Last Name","minLength":"3","maxLength":"30","placeHolderText":"Enter last name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}}]}},{"node":{"appearanceIndex":"2","id":"5074391","type":"Date","label":"Date of Birth","format":"dd-mm-yyyy","readOnly":"false","style":{"Bold ":"false","Italic ":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"3","type":"Group","id":"9190541","minInstance":"1","maxInstance":"3","groupLabel":"Please Enter your Primary Address","childNodes":[{"node":{"appearanceIndex":"1","id":"5074392","type":"valueNode","label":"Address Line1","minLength":"3","maxLength":"100","placeHolderText":"Enter Flat/apartment number","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"2","id":"5074393","type":"valueNode","label":"Line2","minLength":"3","maxLength":"100","placeHolderText":"Area address","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"3","id":"5074394","type":"valueNode","label":"City","minLength":"3","maxLength":"30","placeHolderText":"Enter City Name","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"4","id":"5074395","type":"valueNode","label":"Zip","minLength":"5","maxLength":"5","placeHolderText":"Zip","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}}]}},{"node":{"appearanceIndex":"3","type":"Group","id":"5190541","minInstance":"1","maxInstance":"3","groupLabel":"Please Enter your Office Address","childNodes":[{"node":{"appearanceIndex":"1","id":"5074396","type":"valueNode","label":"Address Line1","minLength":"3","maxLength":"100","placeHolderText":"Enter Flat/apartment number","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"2","id":"5074397","type":"valueNode","label":"Line2","minLength":"3","maxLength":"100","placeHolderText":"Area address","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"3","id":"5074398","type":"valueNode","label":"City","minLength":"3","maxLength":"30","placeHolderText":"Enter City Name","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"4","id":"5074399","type":"valueNode","label":"Zip","minLength":"5","maxLength":"5","placeHolderText":"Zip","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}}]}}]};
const objList2 = {"appearanceIndex":"1","type":"Group","id":"9413156","minInstance":"1","maxInstance":"1","groupLabel":"Please Enter your name","childNodes":[{"node":{"appearanceIndex":"2","id":"5074390","type":"valueNode","label":"First Name","nvalue":"test","minLength":"3","maxLength":"30","placeHolderText":"Enter First name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"2","id":"5074391","type":"valueNode","label":"Middle Name","nvalue":"test","minLength":"3","maxLength":"30","placeHolderText":"Enter Middle name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":" "}}},{"node":{"appearanceIndex":"2","id":"5074392","type":"valueNode","label":"Last Name","nvalue":"test","minLength":"3","maxLength":"30","placeHolderText":"Enter last name here","readOnly":"false","style":{"Bold ":"false","Italic ":"false","underline":"false","fontSize":"14","fontName":"Times New Roman","cssStyle":"None"},"data":{"value":"test"}}}]};
const data = {"user_details":{"first_name":"vinod","last_name":"tiwari"},"order_list":[{"id":"1","name":"Mobile"},{"id":"2","name":"Tv"},{"id":"3","name":"Laptop"}]}

export default function Test(){
  const [getObj, setObj] = useState(objList);
  const [getList, setList] = useState(objList2);
  const [getData, setData] = useState(data);

  let updateUserData = (e, index) =>{
    const backData = [...data.order_list];
    let updateValue = backData.map((item, key)=>{
        if(index == key){
            return {...item,name: e.target.value}
        }else{
            return item;
        }
    });

    setData((prev)=>{
        return {...prev, user_details: {first_name: "test"},order_list: updateValue}
    });
  }
  
  let updateFormData = (e, index) =>{
    const backData2 = {...getList};
    const updateValue = backData2.childNodes.map((item, key)=>{
        if(index == key){
            return {...item, node: {...item.node, nvalue: e.target.value,data : {value: e.target.value}}}
        }else{
            return item;
        }
    });
    
    setList((prev)=>{
        return {...prev, childNodes: updateValue}
    });
  }

  let updatObjects = (e, pindex, cindex = 0, type) =>{
        let backData = {...getObj};
        let updateData = {}
        if(type == "Group"){
            updateData = backData.nodes.map((item, index)=>{
                if(pindex == index){
                    let cData = item.node.childNodes.map((citem, ckey)=>{
                        if(cindex == ckey){
                            return {...citem, node: {...citem.node,data: {...citem.node.data, value: e.target.value}}};
                        }else{
                            return citem
                        }
                    });
                    return {...item, node: {...item.node, childNodes: cData}}
                }else{
                    return item
                }
            });
        }else{
            updateData = backData.nodes.map((item, index)=>{
                if(pindex == index){
                    return {...item,node:{...item.node, data: {value: e.target.value}}};
                }else{
                    return item
                }
            });
        }
        setObj((prev)=>{
            return {...prev, nodes: updateData}
        });
  }

  return (
    <div>

<h1>Example 1 update state</h1>
      <h2>{getData.user_details.first_name}</h2>
      <div>
        {getData.order_list.map((item,itemKey)=>(
          <div key={itemKey} >
          {item.name} || <input type="text" name="name" onChange={(e)=>updateUserData(e, itemKey)} defaultValue={item.name} />
          </div>
        ))}
      </div>


<h1>Example 2 update state</h1>
      {getList.childNodes.map((uitem,uKey)=>(
          <div key={uKey} >
          {uitem.node.nvalue} || <input type="text" name="nvalue" onChange={(e)=>updateFormData(e, uKey)} defaultValue={uitem.node.nvalue} />
          </div>
        ))}


      
<h1>Example 3 : {getObj.taskDescription}</h1>
        {getObj.nodes.map((uitem,uKey)=>{
            if(uitem.node.childNodes === undefined){
                    return(
                        <div key={uKey}>
                          <div className="col">{uitem.node.label} : {uitem.node.data.value}</div>
                          <div><input type="text" name="nvalue" onChange={(e)=>updatObjects(e, uKey)} value={uitem.node.data.value} /></div>
                        </div>
                    )
            }else{
                return uitem.node.childNodes.map((d,dkey)=>{
                    return(<div>
                        <div className="col">{d.node.placeHolderText} : {d.node.data.value}</div> 
                        <div><input type="text" name="nvalue" onChange={(e)=>updatObjects(e, uKey, dkey, uitem.node.type)} defaultValue={d.node.data.value} /></div>
                    </div>)
            })
            }
        })}


     


    </div>
  );
}