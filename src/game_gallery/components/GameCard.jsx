import React from 'react';
import styles from '../styles/GameCard.module.css';

const GameCard = ({ game, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={game.image} alt={`${game.name} Thumbnail`} className={styles.image} />
      <h2 className={styles.title}>{game.name}</h2>
    </div>
  );
};

export default GameCard;
