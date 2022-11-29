import React, { useState, useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <br /><br /><br /><br />
      
      <button onClick={() => dispatch({type: 'decrement'})}>-</button> 
        Count: {state.count} 
       <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Counter;
