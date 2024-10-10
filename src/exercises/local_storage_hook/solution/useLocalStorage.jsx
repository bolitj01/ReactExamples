import { useState, useEffect } from 'react';

function useLocalStorage(key, value) {
  //Complete the custom hook
  const [search, setSearch] = useState(value)

  useEffect(() => {
    localStorage.setItem(key, search)
  }, [search])
  
  const update = (value) => {
    localStorage.setItem(key, value)
    setSearch(value)
  }

  return [search, update]
}

export default useLocalStorage;
