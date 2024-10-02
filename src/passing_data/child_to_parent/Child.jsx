import styles from "./Child.module.css";

export default function Child({ buttons, setCount }) {
  return (
    <div className={styles.child}>
      <p>Child</p>

      {Array.from({ length: buttons }).map((_, index) => (
        <button className={styles.button} key={index} onClick={() => setCount(index)}>{index}</button>
      ))}
    </div>
  );
}
