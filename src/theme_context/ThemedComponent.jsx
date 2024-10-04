import React from 'react';
import { useTheme } from './ThemeContext';
import lightStyles from './light_theme.module.css';
import darkStyles from './dark_theme.module.css';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  // Determine which styles to use based on the theme
  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <div className={styles.container}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button className={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
