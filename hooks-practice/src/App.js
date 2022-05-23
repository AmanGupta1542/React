import React, { useState } from 'react';

let count = 0;
const IncNum = () => {
  count++;
  console.log('click');
}

const App = () => {
  // useState hme 2 values return karta hai pahli current Data or doosrti updated data 
  // ya kahe updated function 
  // jab ham useState me koi value pass karte hai to bo kahlata hai hamara initial data 
  const state = useState();
  // console.log(state);

  const [count, setCount] = useState(0);
  // yaha count ko ham as a variable use kar sakte hai (from array destructuring concept)
  // and count ki initial value hamne 0 set ki with the help of useState(0), useState(1) karengy to count ki initial value 1 set ho jaygi
  // and setCount function ko ham use karke count ki value ko update kar sakte hai

  const IncNum = () => {
    // updating count variable value with the help of setCount method 
    // yaha setCount name ki jagah koi bhi name le sakte hai but name bahi lena hai jo [] me useState se destructure ke time pr hmne name diya hai.
    setCount(count + 1);
  }

  return (
    <>
      <h1>{ count }</h1>
      {/* function calling on onclick event  */}
      <button onClick={IncNum}>Click</button>
    </>
  );
}
export default App;