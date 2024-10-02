import styles from "./SumHistory.module.css";
import { useState, useEffect, useRef } from "react";

const SumHistory = () => {
  const [sum, setSum] = useState(0);
  const [changes, setChanges] = useState([]);
  const textInput = useRef(null);

  useEffect(() => {
    setChanges([...changes, sum]);
  }, [sum]);

  return (
    <div className={styles.center}>
      <p>{sum}</p>
      <input
        type="text"
        name=""
        id=""
        ref={textInput}
      />
      <button onClick={() => setSum((prev) => prev + Number(textInput.current.value))}>
        Add
      </button>
      <h5>History</h5>
      <ul>
        {changes.map((change, index) => (
          <li key={index} className={styles.center}>{change}</li>
        ))}
      </ul>
    </div>
  );
};

export default SumHistory;