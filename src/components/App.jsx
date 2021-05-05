import React from "react";

function App() {
  setInterval(currentTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);

  function currentTime() {
    const nowTime = new Date().toLocaleTimeString();
    setTime(nowTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
