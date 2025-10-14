import styles from "../LSHExercise.module.css";
import useLocalStorage from "./useLocalStorage";

function LSHExercise() {
  const key = "search";
  const [search, update] = useLocalStorage(key, localStorage.getItem(key));

  return (
    <div className={styles.root}>
      <h1>Local Storage Tracker</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => update(e.target.value)}
        placeholder="Enter your name"
      />
      <h3>{search}</h3>
    </div>
  );
}

export default LSHExercise;
