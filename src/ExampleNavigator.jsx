import { Link } from "react-router-dom"
import styles from "./menu.module.css"

function ExampleNavigator() {

  return (
    <>
      <h1>Examples</h1>
      <div className={styles.hide}>
        <h3 className={styles.speed1}>Introduction</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/hello_react">Hello React</Link>
          </li>
          <li className={styles.speed3}>
            <Link to="/simple">Simple</Link>
          </li>
        </ul>
        <h3 className={styles.speed1}>Passing Data</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/passing_data">Passing Data</Link>
          </li>
        </ul>
        <h3 className={styles.speed1}>Hooks</h3>
        <h4 className={styles.speed2}>Effects</h4>
        <ul>
          <li className={styles.speed3}>
            <Link to="/movie_gallery">Movie Gallery</Link>
          </li>
        </ul>
        <h4 className={styles.speed2}>Context</h4>
        <ul>
          <li className={styles.speed3}>
            <Link to="/theme_context">Theme Context</Link>
          </li>
        </ul>
        <h4 className={styles.speed2}>Reducers</h4>
        <ul>
          <li className={styles.speed3}>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
        <h4 className={styles.speed2}>Custom Hooks</h4>
        <ul>
        <li className={styles.speed3}>
          <Link to="/calculator">Calculator</Link>
        </li>
        </ul>
        <ul>
          <li className={styles.speed3}>
            <Link to="/sum_history">Sum History</Link>
          </li>
        </ul>
        <h3 className={styles.speed1}>Exercises</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/contact_list">Contact List</Link>
          </li>
          <li className={styles.speed3}>
            <Link to="/local_storage_hook">Local Storage Hook</Link>
          </li>
        </ul>
        <h3 className={styles.speed1}>Common Mistakes</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/events">Events</Link>
          </li>
          <li className={styles.speed2}>
            <Link to="/state">State</Link>
          </li>
        </ul>
        <h3 className={styles.speed1}>Examples</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/tic_tac_toe">Tic Tac Toe</Link>
          </li>
          <li className={styles.speed2}>
            <Link to="/movie_gallery">Movie Gallery</Link>
          </li>
          <li className={styles.speed2}>
            <Link to="/room_admin">Room Admin</Link>
          </li>
          <li className={styles.speed2}>
            <Link to="/game_gallery">Game Gallery</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ExampleNavigator
