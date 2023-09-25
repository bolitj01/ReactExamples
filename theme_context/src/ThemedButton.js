import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedButton = (props) => {
    const {themeState} = useContext(ThemeContext);

    return (
        <button className={themeState}>Themed Button</button>
    );
}

export default ThemedButton;