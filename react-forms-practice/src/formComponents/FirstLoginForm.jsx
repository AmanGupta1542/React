import React, { useState } from "react";

function FirstLoginForm() {

  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");

  const [fname, setFName] = useState(null);
  const [lname, setLName] = useState(null);

  const InputEvent = (event) => {
    changeFirstName(event.target.value);
  }

  const InputEventTwo = (event) => {
    changeLastName(event.target.value);
  }

  const OnSubmit = (event) => {
    event.preventDefault();
    setFName(firstName);
    setLName(lastName);
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={OnSubmit}>
          <h1>Hello {fname} {lname} </h1>
          
          <input 
            type="text" 
            placeholder="Enter your firs name" 
            name="lname"
            onChange={InputEvent}
            value = {firstName}
          />
          <br />
          <input 
            type="text" 
            placeholder="Enter your last name" 
            name="fname"
            onChange={InputEventTwo}
            value = {lastName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FirstLoginForm;
