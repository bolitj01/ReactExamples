import { useState } from "react";
import styles from "./rating.module.css";
import RatingSelect from './RatingSelect';
import Feedback from './Feedback';

export default function Rating() {
  //Track the user rating
  

  function handleSelect(r) {
    //Update the selected rating
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.headingReset}>How was your experience?</h2>

      {/* Display the components to allow selecting rating
          and viewing feedback */}
          

    </div>
  );
}