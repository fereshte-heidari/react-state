import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("it-IT");
  const [state, setState] = useState();
  function getTime() {
    setState(time);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
