import { useState, useEffect } from 'react';

export default function Tally() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    counter > 5 && alert(`Score ${counter} is above 5!`);
    console.log(`Counter changed`);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>
    </div>
  );
}

