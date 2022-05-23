import React from "react";
import { useParams } from "react-router-dom";
// importing useLocation to tract user location
import { useLocation } from "react-router-dom";

function User() {
  // const {name} = useParams();
  // yadi 2 parameter access karna ho to 
  const {fname, lname} = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Welcome {fname} {lname}</h1>
      <p>Your location is {location.pathname}.</p>
      {
        location.pathname === '/user/aman/gupta' 
          ? (<button onClick={ () => { alert(`Welcome ${fname} ${lname}.`); } }>Click Me</button>) 
          : null
      }
    </>
  );
}

export default User;
