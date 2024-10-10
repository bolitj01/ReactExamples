import React from 'react';
import GameCard from './GameCard.jsx';
import styles from '../styles/GameGrid.module.css';

const GameGrid = ({ games, selectGame }) => {
  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} onClick={() => selectGame(game)} />
      ))}
    </div>
  );
};

export default GameGrid;
