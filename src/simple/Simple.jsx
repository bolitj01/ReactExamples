import Clock from "./Clock";
import Tally from "./Tally";
import styles from "./Simple.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Clock delay={1000}></Clock>
      <Tally></Tally>
    </div>
  );
}

export default App;
