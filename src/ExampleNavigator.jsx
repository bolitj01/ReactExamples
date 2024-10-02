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
        <h4 className={styles.speed2}>Custom Hooks</h4>
        <li>
          <Link to="/custom_hooks">Calculator</Link>
        </li>
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
        <h3>Examples</h3>
        <ul>
          <li>
            <Link to="/tic_tac_toe">Tic Tac Toe</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ExampleNavigator
