import React from 'react';

function CalcFun(num1, num2){
    return (
        <>
            <h1>Calculater for {num1} and {num2}</h1>
            <h2>Addition : {Add(4,2)}</h2>
            <h2>Subtration : {Subtract(4,2)}</h2>
            <h2>Multiplication : {Multiply(4,2)}</h2>
            <h2>Division : {Divide(4,2)}</h2>
        </>
        );
}
function Add(num1, num2){
    return num1+num2;
}

function Subtract(num1, num2){
    return num1-num2;
}

function Divide(num1, num2){
    return num1/num2;
}

function Multiply(num1, num2){
    return num1*num2;
}

export default CalcFun;
// export {Add, Subtract, Multiply, Divide} ;