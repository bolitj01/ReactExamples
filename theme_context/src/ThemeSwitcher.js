import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeSwitcher() {
    const { themeState, setThemeState } = useContext(ThemeContext);

    return (
        <button 
        onClick={() => setThemeState(themeState === "dark" ? "light": "dark")}
        className={themeState}
        >
            Toggle Theme
        </button>
    )
}

export default ThemeSwitcher