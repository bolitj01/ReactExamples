import { useState } from "react";
import Child from "./Child";
import styles from "./Parent.module.css";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [buttons, setButtons] = useState(1)

  return (
    <div className={styles.parent}>
      <p>Parent</p>
      <p>Count: {count}</p>

      <input type="text" name="" id="" className={styles.input}
      onChange={(e) => {
        setButtons(Number(e.target.value))
      }}/>

      <Child buttons={buttons} setCount={setCount}></Child>
    </div>
  );
}
