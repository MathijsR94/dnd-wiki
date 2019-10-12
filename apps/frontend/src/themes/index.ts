import {Themes} from '../hooks/effects/useTheme';
import darkTheme from './dark';
import lightTheme from './light';

const theme = (theme: Themes) =>
    theme === Themes.Dark ? darkTheme : lightTheme;

export default theme;
