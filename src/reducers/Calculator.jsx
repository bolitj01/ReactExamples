//Calculator using the reducer hook
import styles from "./Calculator.module.css";

import { useRef } from "react";
import useCalculator from "./useCalculator";

const initialValue = 0;

function Calculator() {
  const operand = useRef(null);

  const [value, calculation] = useCalculator(initialValue);

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Calculator Using Reducer</h1>
      <div>
        <h2>{value}</h2>
        <input type="number" ref={operand} />
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => calculation("ADD", operand.current.value)}
        >
          +
        </button>
        <button
          className={styles.button}
          onClick={() => calculation("SUBTRACT", operand.current.value)}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={() => calculation("MULTIPLY", operand.current.value)}
        >
          *
        </button>
        <button
          className={styles.button}
          onClick={() => calculation("DIVIDE", operand.current.value)}
        >
          /
        </button>
        <button
          className={styles.button}
          onClick={() => calculation("RESET", 0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Calculator;
