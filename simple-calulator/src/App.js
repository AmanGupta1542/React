// import './App.css';
// import CalcFun, {Add, Subtract, Multiply, Divide} from './CalcFun';

// function App() {
//   return (
//     <>
//       <h1>{CalcFun(4, 2)}</h1>
//       <h2>Addition : {Add(4,2)}</h2>
//       <h2>Subtration : {Subtract(4,2)}</h2>
//       <h2>Multiplication : {Multiply(4,2)}</h2>
//       <h2>Division : {Divide(4,2)}</h2>
//     </>
//   );
// }

// export default App;

// OR

import './App.css';
import CalcFun from './CalcFun';

function App() {
  return CalcFun(4,2);
}

export default App;
