import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// jo file single cheez ko export kar rahi hai use kisi bhi name se export kar sakte hai.
// import myName, {lname} from './App';

// is tarah se bhi ham import kar sakte hai, ab app file ke sabhi cheezo ko appVAr. se access kar sakte hai
// but default export ko appVar.default se bhi call kar sakte hai and appVar.actual-name se bhi call kar sakte hai
import * as appVar from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function ke name ko access karte time () lagana padega.
root.render(
  <h1>My name is {appVar.default} {appVar.lname()}</h1>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
