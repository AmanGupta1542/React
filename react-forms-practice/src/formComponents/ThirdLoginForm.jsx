import React, { useState } from "react";

function App() {
  // useState me ek sigle variable ki initial value set karne se achha ham usme annonimous function
  // ke through ek object return kra ke multiple values set kar sakte hai

  const [fullName, setFullName] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phone : ''
  });


  const InputEvent = (event) => {
    // user ji bhi field me input karega ya change karega us field se hame bo value mil jaygi
    console.log(event.target.value);

    // ye line hame input field ke name attribute ki value degi means yadi me first name input field 
    // me kuchh add karuga to value milegi 'fname' because first name input field ke name attribute ki
    // value hai fname ese hi yad last name input field me jab kuchh add karengy to yahi line hame ab
    // last name input field ke name attribute ki value degi jo ki hai "lname"
    console.log(event.target.name);

    // yadi placeholder kar de to jis field me user change karega us field ke placeholder ki value milegi
    console.log(event.target.placeholder);

    // current working input field ki value and uska name attribute ki value hm store kar lengy
    // const value = event.target.value;
    // const name = event.target.name;

    // using object destructuring
    const {value, name } = event.target;

    // setFullName hme jo useState ka use karke jo initial values set ki thi bo return karta hai
    // jisko ham is anonimious function me pass kar sakte hai.
    setFullName( (prevValue) => {
      // initial jo value set ki thi unko print karbana
      console.log(prevValue);

      // ab ham condition lga sakte hai ki yadi event.target.name me current working input field ke 
      // according kis useState object key ki initial value ko change karna hai. e.g. ->

      if (name === 'fName'){
        return {
          // first name me jo value input hui hai bo set ho jaygi or last name me jo previous value thi
          // bahi fir se set ho jaygi
          firstName : value,
          lastName : prevValue.lastName,
          email : prevValue.email,
          phone : prevValue.phone
        }
      }
      else if (name === 'lName'){
        return {
          // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
          // bahi fir se set ho jaygi
          firstName : prevValue.firstName,
          lastName : value,
          email : prevValue.email,
          phone : prevValue.phone
        }
      }
      else if (name === 'email'){
        return {
          // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
          // bahi fir se set ho jaygi
          firstName : prevValue.firstName,
          lastName : prevValue.lastName,
          email : value,
          phone : prevValue.phone
        }
      }
      else if (name === 'phone'){
        return {
          // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
          // bahi fir se set ho jaygi
          firstName : prevValue.firstName,
          lastName : prevValue.lastName,
          email : prevValue.email,
          phone : value
        }
      }
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
          <h1>Hello {fullName.firstName} {fullName.lastName} </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          
          <input 
            type="text" 
            placeholder="Enter your first name" 
            name="fName"
            onChange={InputEvent}
            value = {fullName.firstName}
          />
          <br />
          <input 
            type="text" 
            placeholder="Enter your last name" 
            name="lName"
            onChange={InputEvent}
            value = {fullName.lastName}
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
