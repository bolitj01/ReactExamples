import { useRef } from 'react'
import './App.css'
import useCalculator from './useCalculator'

function App() {

  const [value, add, subtract, multiply, divide, reset] = useCalculator(0);
  const operand = useRef(null);

  return (
    <>
      <h1>Calculator</h1>
      <div>
        <h2>{value}</h2>
        <input
          type="number"
          ref={operand}
        />
      </div>
      <div>
        <button onClick={() => add(operand.current.value)}>+</button>
        <button onClick={() => subtract(operand.current.value)}>-</button>
        <button onClick={() => multiply(operand.current.value)}>*</button>
        <button onClick={() => divide(operand.current.value)}>/</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </>
  )
}

export default App
