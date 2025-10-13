import React from 'react';
import styles from '../rating.module.css';

const EMOJIS = ["😠", "😕", "😐", "🙂", "🤩"];

export default function RatingSelect({ rating, setRating }) {
  return (
    <div role="radiogroup" aria-label="Emoji rating" className={styles.row}>
      {EMOJIS.map((emoji, idx) => {
        const value = idx + 1;
        const selected = rating === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setRating(value)}
            className={`${styles.emojiBtn} ${selected ? styles.selected : ''}`}
            title={`${value} star${value > 1 ? 's' : ''}`}
          >
            <span className={styles.emojiSpan}>{emoji}</span>
          </button>
        );
      })}
    </div>
  );
}
