import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    //Gets existing local storage value or sets the initial value
    return storedValue !== null ? JSON.parse(storedValue).value : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({
      value: value,
      date: new Date().toLocaleString()
    }));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
