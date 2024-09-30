import { Link } from "react-router-dom"
import "./navigator.css"

function ExampleNavigator() {

  return (
    <>
      <h1>Examples</h1>
      <h3>Introduction</h3>
      <ul>
        <li className="speed1">
          <Link to="/hello_react">Hello React</Link>
        </li>
      </ul>
    </>
  )
}

export default ExampleNavigator
