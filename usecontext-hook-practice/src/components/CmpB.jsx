import React, { useContext } from "react";
import { FirstName, LastName } from "../App";
// Ham dekengy ki useContext ka use karke kese hirarkey se bach sakte hai jo hirearkey component C 
// me ban rahi hai

const CmpB = () => {
    // useContext me hame value pass karni padegi aur jo FirstName and LastName hmne import kiye hai
    // bahi useContext ke liye value banegy.
    const fName = useContext(FirstName);
    // useContext jo pass karengy usme jo value define ki hai us value ko return karega and hm store 
    // kar lengy use ek variable me 

    const lName = useContext(LastName);


    return <h1>This is Component B and name is {fName} {lName}.</h1>;
}

export default CmpB;