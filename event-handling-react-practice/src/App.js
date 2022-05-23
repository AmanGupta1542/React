import React, { useState } from "react";

function App() {

  const purple = "#8e44ad";
  // const name = "Single Click Me";

  const [bg, setBg] = useState(purple);
  const [startName, changedName] = useState("Single Click Me");

  function bgChange(){
    setBg('red');
    changedName('Ayyo 😄')
  }

  function btnDblClick(){
    setBg('yellow');
    changedName('Angry 😠')
  }

  return (
    <>
      <div style={ { backgroundColor : bg } }>
        <button onClick={bgChange} onDoubleClick={btnDblClick}> { startName } </button>
      </div>
    </>
  );
}

export default App;
