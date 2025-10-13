import Clock from "./Clock";
import styles from "./Simple.module.css";
import { useState } from "react";

function App() {
  const [oldClocks, setOldClocks] = useState([]); // array of { id, delay }
  const [activeClock, setActiveClock] = useState({ id: 0, delay: 1000 }); // { id, delay }

  function newClock() {
    setOldClocks([...oldClocks, activeClock]);
    setActiveClock({ id: activeClock.id + 1, delay: activeClock.delay });
  }

  function updateClock(delay) {
    setActiveClock((prev) => ({ ...prev, delay }));
  }

  return (
    <>
      <div className={styles.app}>
        <section>
          <label>
            Delay (ms):{" "}
            <input
              className={styles.input}
              type="number"
              value={activeClock.delay}
              onChange={(e) => updateClock(Number(e.target.value) || 0)}
            />
          </label>
          <button className={styles.button} onClick={newClock}>
            New clock
          </button>
        </section>

        <section className={styles.clockList}>
          {oldClocks.map((c, idx) => (
            <div key={c.id} className={styles.clock}>
              <div className={styles.clockHeader}>Clock #{c.id}</div>
              {/* Only the latest clock runs */}
              <Clock delay={c.delay} running={false} />
            </div>
          ))}

          <div key={activeClock.id} className={styles.clock}>
            <div className={styles.clockHeader}>
              Clock #{activeClock.id} (active)
            </div>
            <Clock delay={activeClock.delay} running={true} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
