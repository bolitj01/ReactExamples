import React, { useContext, useState } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';


function App() {
  const theme = useContext(ThemeContext); //Gets Context default value
  const [themeState, setThemeState] = useState(theme);

  return (
    <ThemeContext.Provider value={{themeState, setThemeState}}>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

export default App;
