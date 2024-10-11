import { MdArrowBackIosNew } from "react-icons/md";
import styles from "../styles/GameWindow.module.css";

const GameWindow = ({ game, closeGame, children }) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <button onClick={closeGame} className={styles.closeButton}>
          <MdArrowBackIosNew />
          Back to Gallery
        </button>
        <h2>{game.name}</h2>
      </div>
      <div className={styles.content}>
        {children ? children : <p>Currently playing: {game.name}</p>}
      </div>
    </div>
  );
};

export default GameWindow;
