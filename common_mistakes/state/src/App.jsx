import './App.css';

function App() {

  //Count is not a state variable
  let count = 0;

  let increment = () => {
    count++;
    //It does change the value of count but it does not re-render the component
    console.log(count);
  }

  return (
    <>
      <h1>Button counter</h1>
      <h3>{count}</h3>
      <button onClick={() => increment()}>Increment</button>
    </>
  )
}

export default App
