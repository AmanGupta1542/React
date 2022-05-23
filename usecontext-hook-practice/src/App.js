import { createContext } from 'react';
import './App.css';
import CmpA from './components/CmpA';

// Component C me is App.js se data bhejne ke liye. 
// 1.) create Context 

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
    {/* 2. to provide this data using provider, Value pass karne ke liye value property me data dengy */}
      <FirstName.Provider value={'Aman'}> 
        <LastName.Provider value={'Gupta'}>
          <CmpA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
// export karna hai FirstName ko taki component C me import karke use kar sake
export {FirstName, LastName};
