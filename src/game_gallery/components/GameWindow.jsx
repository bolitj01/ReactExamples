import React from 'react';
import styles from '../styles/GameWindow.module.css';

const GameWindow = ({ game, closeGame }) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <h2>{game.name}</h2>
        <button onClick={closeGame} className={styles.closeButton}>Close</button>
      </div>
      <div className={styles.content}>
        {/* Render game content here (game logic or iframe) */}
        <p>Game: {game.name}</p>
        <div className={styles.gameContent}>
          {/* Placeholder for actual game implementation */}
          <iframe src={game.url} title={game.name} className={styles.iframe}></iframe>
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
