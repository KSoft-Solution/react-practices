import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1,
        showText: state.showText,
      };
    case "toggleText":
      return {
        counter: state.counter,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

const initialState = {
    counter: 0, showText: true
}

const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>UseReducer</h1>
      <h3>{state.counter}</h3>
      <button onClick={() => {
        dispatch({type:'Increment'})
        dispatch({type:'toggleText'})
      }}>click</button>
      {state.showText && <p>show text</p>}
    </>
  );
};

export default UseReducer;
