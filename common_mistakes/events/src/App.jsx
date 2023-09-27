import { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState(0);

  let showMessage = () => {
    // return "Surprise!";
    // document.querySelector("h3").innerHTML = "Surprise!";
    // setMessage("Surprise!");
  }

  let hideMessage = () => {
    // return "";
    // document.querySelector("h3").innerHTML = "";
    // setMessage("");
  }

  return (
    <>
      <h1>Toggle Message</h1>
      <h3>{message}</h3>
      <button onClick={showMessage()}>Show</button>
      <button onClick={hideMessage()}>Hide</button>
      {/* onClick expects a callback */}
    </>
  )
}

export default App
