import React from "react";

// accessing params of user route. old way. jab useParams nahi tha
// function User({ match }) {
//   return (
//     <>
//       <h1>Welcome {match.params.name}</h1>
//     </>
//   );
// }

// now with use params
// first import useParams from react-router-dom
import { useParams } from "react-router-dom";
function User() {
  const {name} = useParams();
  // yadi 2 parameter access karna ho to 
  // const {name, age} = useParams();

  return (
    <>
      <h1>Welcome {name}</h1>
    </>
  );
}

export default User;
