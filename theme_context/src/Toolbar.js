import React from 'react';
import ThemedButton from "./ThemedButton";
import ThemeSwitcher from './ThemeSwitcher';

const Toolbar = () => {
    return (
        <>
            <ThemeSwitcher></ThemeSwitcher>
            <ThemedButton></ThemedButton>
        </>
    );
};

export default Toolbar;