// var React = require('react');
// this sentance is equal to 
import React from 'react';

// var ReactDOM = require('react-dom');
// this sentance is equal to 
import ReactDOM from 'react-dom';

var name = 'Aman Gupta';
var img1 = "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg";
// JSX expression: render me jo JSX(<h1></h1>) likha hai usme is variable ko use karna hi hai JSX expression
// JSX me is variable ko ham {} ka use karke access kar sakte hai.

// this render method takes 3 argument
// ReactDOM.render('kya dikaba hai', 'kaha dikhana hai', 'callbackfuntion')

// in jsx inline style yadi ham (<h1 style="color:red;">My name is {name}.</h1>) error aaygi 
// styel ko as a object dengy, separated by comma,
const heading ={
    color: 'red',
}
ReactDOM.render(
            <>
            <h1>My name is {name}.</h1>
            <h1 style={heading}>Inline Style in JSX.</h1>
            <img src={img1} alt="Random Image" />
            </>,
            document.getElementById('root') );

// Actually what's happen in the backend after compiling by babel
// ReactDOM.render(React.createContext('h1',null, 'Welcome to first react app'),document.getElementById('root') );

// ** yaha ham "React ko use nahi kar rahe hai but yadi usko comment kar diya to "'React' must be in scope while using JXS". Error aaygi."

// In pure javascript 
// var h1 = document.createElement("h1");
// h1.innerHTML = 'Welcome to first react app';
// document.getElementById('root').appendChild(h1);


// ReactDOM.render(<h1>Welcome to first react app</h1>,<p>Ok</p>,document.getElementById('root') );
// // Ye line error degi "ki yadi ek se jyada JSX elements dikhane hai to unko ek element me wrap karo. Mulitple eliments seperated by , nahi de sakte"

// ReactDOM.render(<div>
//                     <h1>Welcome to first react app</h1>
//                     <p>Ok</p>
//                 </div>,
//                 document.getElementById('root') );


// // ab in dono elements ko ek div me wrap kar diya to error nahi aaygi aur isko ek element ki tarah lega
// but root element me ye div node extra bad jayga to hm aur alternatives use kar sakte hai taki ye div extra node root element me na bade

// yadi ham version 16 ys is se uper ka version ka react use kar rahe hai to "div" tag ki jagah ham array or elements bhi passs kar sakte hai seprated by comma ,.
// ReactDOM.render([
//                     <h1>Welcome to first react app</h1>,
//                     <p>Ok</p>
//                 ],
//                 document.getElementById('root') );

//  OR

// Syntetic sugar form of React.Fragment is <>
// ReactDOM.render(<>
//                     <h1>Welcome to first react app</h1>
//                     <p>Ok</p>
//                 </>,
//                 document.getElementById('root') );

//  OR

// ReactDOM.render(<React.Fragment>
//                     <h1>Welcome to first react app</h1>
//                     <p>Ok</p>
//                 </React.Fragment>,
//                 document.getElementById('root') );







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
