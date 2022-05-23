import React, { useState } from "react";

function OldApp() {

  const [inputVal, changeInputVal] = useState("");
  const [name, setName] = useState(null);

  const InputEvent = (event) => {
    changeInputVal(event.target.value);
    // yadi on the moment name me updation dekhna hai to next line ko uncomment kar do
    // setName(event.target.value);
  }

  const ChangeName = () => {
    // jo input value hogi bo name me current value set ho jaygi using hook.
    setName(inputVal);
  }
  return (
    <>
      <h1>Hello {name}</h1>
      {/* React me form field me onChange event handler dena padega barna error aaygi
      ki react ise as read only treate karega yadi onChange handler nahi hai to. Because this form 
      field element is controled by react */}

      {/* onChange pr jo function call ho raha hai usme by default event pass hota hai jiskon ham us 
      function me access kar sakte hai */}
      <input 
        type="text" 
        placeholder="Enter name" 
        onChange={InputEvent}
        value = {inputVal}
      />
      <button onClick={ChangeName}>Submit</button>
    </>
  );
}

export default OldApp;
