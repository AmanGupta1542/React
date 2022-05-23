import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(time);

  function UpdatedTime(){
    setCTime(new Date().toLocaleTimeString());
  }

  setInterval(() => {
    UpdatedTime();
  }, 1000);

  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
}

export default App;
