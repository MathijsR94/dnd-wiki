import shared from './shared';

const variables = {
    primary: '#101522',
    secondary: '#181d28',
    link: '#48cce9',
    text: '#dedfe0',
    heading: '#fff',
};

export default {
    ...shared,
    colors: {
        ...variables,
        aside: {
            background: variables.primary,
            text: variables.text,
            heading: variables.heading,
            shadow: 'rgba(0, 0, 0, 0.4)',
        },
        main: {
            background: variables.secondary,
            text: variables.text,
            heading: variables.heading,
        },
        select: {
            background: '#1e2d3e',
            text: '#fff',
        },
        topbar: {
            background: variables.primary,
            text: '#fff',
        },
        searchBar: {
            background: variables.primary,
            placeholder: '#f1f1f1',
            text: '#fff',
        },
        separator: '#3d424a',
    },
};
