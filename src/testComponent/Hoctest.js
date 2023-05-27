import React, { useState } from 'react';



function Counter(){
  const [getCount, setCount] = useState(0);
  return (<div><div>Count : {getCount}</div><button onClick={()=>setCount(getCount + 1)}>Counter</button></div>);
}

function HOC(props){
    return (<div style={{color: "red"}}><props.com /></div>);
}

function Test() {

  return (
    <div className="App">
        <p>
          Hoc test page
        </p>
        <Counter />
        <Counter />
        <HOC com = {Counter} />
    </div>
  );
}

export default Test;
