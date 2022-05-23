import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import OldApp from './formComponents/OldApp';
// import FirstLoginForm from './formComponents/FirstLoginForm';
// import SecondLoginForm from './formComponents/SecondLoginForm';
// import ThirdLoginForm from './formComponents/ThirdLoginForm';
// import FourtLoginForm from './formComponents/FourtLoginForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OldApp /> */}
    {/* <FirstLoginForm /> */}
    {/* <SecondLoginForm /> */}
    {/* <ThirdLoginForm /> */}
    {/* <FourtLoginForm /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const person = {
// 	firstName : 'aman',
// 	lastName : 'gupta'
// };

// const biodata = {
// 	id : 1, 
//   ...person,
// 	age : 24,
// 	lastName : 'kumar'
// };

// console.log(biodata);
