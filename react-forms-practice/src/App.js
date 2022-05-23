import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName : '',
    lName : '',
    email : '',
    phone : ''
  });

  const InputEvent = (event) => {
    const {name, value } = event.target;

    setFullName( (prevValue) => {
      return {
        ...prevValue,
        [name] : value
      };
    });

  }

  const OnSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={OnSubmit}>
          <h1>Hello {fullName.fName} {fullName.lName} </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          
          <input 
            type="text" 
            placeholder="Enter your first name" 
            name="fName"
            onChange={InputEvent}
            value = {fullName.fName}
          />
          <br />
          <input 
            type="text" 
            placeholder="Enter your last name" 
            name="lName"
            onChange={InputEvent}
            value = {fullName.lName}
          />
          <br />
          <input 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            onChange={InputEvent}
            value = {fullName.email}
          />
          <br />
          <input 
            type="number" 
            placeholder="Enter your mobile number" 
            name="phone"
            onChange={InputEvent}
            value = {fullName.phone}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
