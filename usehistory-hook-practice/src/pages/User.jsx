import React from "react";
import { useParams } from "react-router-dom";
// importing useLocation to tract user location
import { useLocation, useNavigate } from "react-router-dom";

function User() {
  // const {name} = useParams();
  // yadi 2 parameter access karna ho to 
  const {fname, lname} = useParams();
  const location = useLocation();
  // console.log(location);

  const history = useNavigate();
  console.log(history);

  return (
    <>
      <h1>Welcome {fname} {lname}</h1>
      <p>Your location is {location.pathname}.</p>
      {
        location.pathname === '/user/aman/gupta' 
          ? (<button onClick={ () => { history('/') } }>Click Me</button>) 
          : null
      }
    </>
  );
}

export default User;
