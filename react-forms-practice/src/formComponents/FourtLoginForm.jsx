import React, { useState } from "react";

const FourtLoginForm = () => {
    // useState me ek sigle variable ki initial value set karne se achha ham usme annonimous function
    // ke through ek object return kra ke multiple values set kar sakte hai
  
    const [fullName, setFullName] = useState({
      fName : '',
      lName : '',
      email : '',
      phone : ''
    });
  
  
    const InputEvent = (event) => {
      const {name, value } = event.target;
  
      setFullName( (prevValue) => {
        console.log(prevValue);
        // ab itna code na karke ham spread operator ka use karengy
  
        return {
          ...prevValue,
          // yadi name ko bina [] ke likehengy to ye is object ne name name ki property add kardega
          // jiski value user ki input value set kar dega, but yadi prevValue object ki property ki 
          // value ko update karna hai ek or key add nahi karna hai to name ko [] me pass karna hoga
          // name: value
          [name] : value
        };
        // ye return kya karega ki jo prevValue ka object hai jisme sari previous state ki values hai
        // unko as it is rakhega and jo name hamare pass aaya hai bo hai input field ke name attribute ki 
        // value usme jo user ne input kiya hai bo value set kardega and prevValue objeject ke us key value
        // pair ko hta ke ye ye new key value pair add kar dega.
      
  
        // if (name === 'fName'){
        //   return {
        //     // first name me jo value input hui hai bo set ho jaygi or last name me jo previous value thi
        //     // bahi fir se set ho jaygi
        //     firstName : value,
        //     lastName : prevValue.lastName,
        //     email : prevValue.email,
        //     phone : prevValue.phone
        //   }
        // }
        // else if (name === 'lName'){
        //   return {
        //     // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
        //     // bahi fir se set ho jaygi
        //     firstName : prevValue.firstName,
        //     lastName : value,
        //     email : prevValue.email,
        //     phone : prevValue.phone
        //   }
        // }
        // else if (name === 'email'){
        //   return {
        //     // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
        //     // bahi fir se set ho jaygi
        //     firstName : prevValue.firstName,
        //     lastName : prevValue.lastName,
        //     email : value,
        //     phone : prevValue.phone
        //   }
        // }
        // else if (name === 'phone'){
        //   return {
        //     // if ka ulta hoga last name me jo value input hui hai bo set ho jaygi or first name me jo previous value thi
        //     // bahi fir se set ho jaygi
        //     firstName : prevValue.firstName,
        //     lastName : prevValue.lastName,
        //     email : prevValue.email,
        //     phone : value
        //   }
        // }
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

export default FourtLoginForm;