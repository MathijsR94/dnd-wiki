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
        const lsDark = Boolean(localStorage.getItem('dark'));

        setThemeState({
            dark: lsDark,
            hasThemeLoaded: true,
        });
    }, []);

    useEffect(() => {
        if (!window.matchMedia) {
            return;
        }
        const dark = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e: MediaQueryListEvent) => {
            if (!e) {
                return;
            }

            setThemeState({
                dark: e.matches,
                hasThemeLoaded: true,
            });
            localStorage.setItem('dark', JSON.stringify(e.matches));
        };

        if (dark) {
            if (dark.addEventListener) {
                dark.addEventListener('change', listener);
            }

            localStorage.setItem('dark', JSON.stringify(dark.matches));
            setThemeState({
                dark: dark.matches,
                hasThemeLoaded: true,
            });
        }

        return () => {
            if (dark && dark.removeEventListener) {
                dark.removeEventListener('change', listener);
            }
        };
    }, []);

    return [themeState, setThemeState];
};

export {useTheme, useEffectTheme, ThemeContext};
