import React, { useState } from 'react';
import styles from '../rating.module.css';

export default function Feedback({ rating }) {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isHigh = rating >= 4;
  const isLow = rating !== null && rating <= 3;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  /* TODO - Decide when to show each portion of JSX based
      on the selected rating */
  if (isHigh && rating) {
    return <div className={styles.thanks}>🎉 Thanks for the {rating}-star rating!</div>;
  }

  if (isLow && submitted) {
    return <div className={styles.confirm}>✅ Thanks—your feedback was recorded.</div>;
  }

  if (isLow && !submitted) {
    return (
      <form onSubmit={handleSubmit} className={styles.formFull}>
        <label className={styles.label}>Could you tell us what we can improve?</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback..."
          rows={3}
          className={styles.textarea}
        />
        <div className={styles.alignRight}>
          <button
            type="submit"
            disabled={!feedback.trim()}
            className={`${styles.submit} ${feedback.trim() ? styles.submitEnabled : styles.submitDisabled}`}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  return null;
}
