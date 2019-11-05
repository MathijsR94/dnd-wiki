import shared from './shared';
import {lighten} from 'polished';

const variables = {
    primary: '#fff',
    secondary: '#f1f5f9',
    link: '#2561b0',
    text: '#626365',
    heading: '#323032',
};

export default {
    ...shared,
    colors: {
        ...variables,
        aside: {
            background: variables.secondary,
            text: variables.text,
            heading: variables.heading,
            shadow: 'rgba(0, 0, 0, 0.1)',
        },
        main: {
            background: variables.primary,
            text: variables.text,
            heading: variables.heading,
        },
        select: {
            background: '#fff',
            text: '#999ca7',
        },
        topbar: {
            background: variables.secondary,
            text: variables.text,
        },
        searchBar: {
            background: variables.secondary,
            placeholder: lighten(0.2, variables.text),
            color: variables.text,
        },
        separator: '#e1e3e8',
    },
};
