import styles from "./LSHExercise.module.css";
import useLocalStorage from "./useLocalStorage";

function LSHExercise() {
  const key = "search";
  const [search, setSearch] = useLocalStorage(key, "bicycle");

  return (
    <div className={styles.root}>
      <h1>Local Storage Tracker</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your name"
      />
      <h3>{localStorage.getItem(key)}</h3>
    </div>
  );
}

export default LSHExercise;
