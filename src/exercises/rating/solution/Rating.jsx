import { useState } from "react";
import styles from "../rating.module.css";
import RatingSelect from './RatingSelect';
import Feedback from './Feedback';

export default function Rating() {
  //TODO - Track the user rating
  const [rating, setRating] = useState(null); // number | null

  function handleSelect(r) {
    //TODO - Update the selected rating
    setRating(r);
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.headingReset}>How was your experience?</h2>

      {/* TODO - Display the components to allow selecting rating
          and viewing feedback */}
      <RatingSelect rating={rating} onSelect={handleSelect} />

      <Feedback rating={rating} />
    </div>
  );
}
