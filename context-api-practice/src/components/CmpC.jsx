import React from "react";
import { FirstName, LastName } from "../App";

// now ham consume karengy is FirstName ke data means value ko

const CmpC = () => {
    return (
        <>
        {/* jese provider bese consume karte time consume but Consumer bus function ko samajhta hai to 
        ham usko function dengy ham yaha callback function {} me pass karengy */}
            <FirstName.Consumer>
                {/* () ke andar kisi bhi name ka variable le lo usme bo value aa jaygi jo FirstName 
                me value attribute me value pass ki hui hai. */}
                { (fName) => {
                    return (
                        <>
                            <LastName.Consumer>
                                { (lName) => {
                                    return <h1>This is Component C and name is {fName} {lName}.</h1>
                                }}
                            </LastName.Consumer>
                        </>
                    );
                    
                }}
            </FirstName.Consumer>
        </>
    );
}

export default CmpC;