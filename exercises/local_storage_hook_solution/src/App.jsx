import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {

  const key = "search";
  const [search, setSearch] = useLocalStorage(key, 'bicycle');

  return (
    <>
      <h1>Local Storage Tracker</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your name"
      />
      <h3>{localStorage.getItem(key)}</h3>
    </>
  )
}

export default App
