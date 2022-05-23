import React, { useState } from "react";

function App() {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(newTime);

  const SetCurrTime = () => {
    setCTime(new Date().toLocaleTimeString());
  }

  return (
    <>
      <h1>{cTime}</h1>
      <button onClick={SetCurrTime}>Get Time</button>
    </>
  );
}

export default App;
