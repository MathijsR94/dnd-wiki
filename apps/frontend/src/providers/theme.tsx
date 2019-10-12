import React, {ReactElement} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {useEffectTheme, Themes, ThemeContext} from '../hooks/effects/useTheme';
import themeObject from '../themes';

type Props = {
    children: ReactElement;
};

const ThemeProvider = ({children}: Props) => {
    const [themeState, setThemeState] = useEffectTheme();

    function handleToggleThemeState() {
        // @ts-ignore
        const dark = !themeState.dark;
        localStorage.setItem('dark', JSON.stringify(dark));
        // @ts-ignore
        setThemeState({...themeState, dark});
    }

    // @ts-ignore
    const computedTheme = themeState.dark
        ? themeObject(Themes.Dark)
        : themeObject(Themes.Light);

    // @ts-ignore
    return themeState.hasThemeLoaded ? (
        <StyledThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    // @ts-ignore
                    dark: themeState.dark,
                    toggleTheme: handleToggleThemeState,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </StyledThemeProvider>
    ) : (
        <div />
    );
};

export default ThemeProvider;
