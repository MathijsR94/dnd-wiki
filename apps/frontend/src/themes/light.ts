import shared from './shared';
import {darken} from 'polished';

const variables = {
    topbar: '#eceef2',
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
            focus: darken(0.1, variables.topbar),
            placeholder: '#989ba6',
            border: '#989ba6',
        },
        link: '#004394',
        separator: '#e1e3e8',
    },
};
