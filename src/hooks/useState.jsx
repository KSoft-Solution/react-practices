import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [showText,setShowText] = useState(true)
  return (
    <div>
      <h1>useState</h1>
      <h3>{counter}</h3>
      {/* <button onClick={() => setCounter(counter + 1)}>click</button> */}
      <button onClick={() => {
        setCounter(counter + 1)
        setShowText(!showText)
      }}>click</button>
      {showText && (<p>text opened</p>)}
    </div>
  );
};

export default UseState;
