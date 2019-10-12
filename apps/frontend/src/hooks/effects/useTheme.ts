import {createContext, useContext, useState, useEffect} from 'react';

export enum Themes {
    'Light' = 'light',
    'Dark' = 'dark',
}

const defaultContextData = {
    dark: false,
    toggleTheme: () => {},
};

export interface IThemeContext {
    dark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectTheme = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeLoaded: false,
    });

    useEffect(() => {
        const lsDark = localStorage.getItem('dark') === 'true';

        setThemeState({
            dark: lsDark,
            hasThemeLoaded: true,
        });
    }, []);

    return [themeState, setThemeState];
};

export {useTheme, useEffectTheme, ThemeContext};
