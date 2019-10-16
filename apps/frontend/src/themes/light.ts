import shared from './shared';
import {darken} from 'polished';

const variables = {
    topbar: '#004394',
};

export default {
    ...shared,
    colors: {
        aside: {
            background: '#f6f8fa',
            text: '#989ba6',
            heading: '#222',
            shadow: 'rgba(0, 0, 0, 0.1)',
        },
        main: {
            background: '#fff',
            text: '#222',
            heading: '#222',
        },
        select: {
            background: '#fff',
            text: '#999ca7',
        },
        topbar: {
            background: variables.topbar,
            text: '#fff',
        },
        searchBar: {
            background: darken(0.1, variables.topbar),
            placeholder: '#d0d0d0',
        },
        link: variables.topbar,
        separator: '#e1e3e8',
    },
};
