import React from 'react';

const MyComponent = (props) => {
  // Render component based on prop1 and prop2
  console.log("call child component")
  return (
    <div>
      <h1>Prop1: {props.item}</h1>
      <p>Prop2: </p>
    </div>
  );
};

const MyComponent2 = () => {
  console.log("MyComponent2")
  return (
    <div>
      <h1>MyComponent2 </h1>
    </div>
  );
};

const MemoizedMyComponent = React.memo(MyComponent);
const MemoizedMyComponent2 = React.memo(MyComponent2);
console.log(MemoizedMyComponent)

export default () => {
  // Render the memoized component
  const [count, setCount] = React.useState(0);

  
  return <>
  count : {count}
  <button onClick={()=>setCount(count +1)}>+</button>
    <MemoizedMyComponent item = {count} />
    <MemoizedMyComponent2 />
  </>
};