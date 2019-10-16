import shared from './shared';
import {darken} from 'polished';

const variables = {
    topbar: '#5ba8eb',
};

export default {
    ...shared,
    colors: {
        aside: {
            background: '#11171f',
            text: '#fff',
            heading: '#ced3d4',
            shadow: 'rgba(0, 0, 0, 0.4)',
        },
        main: {
            background: '#131e2b',
            text: '#d1d1d4',
            heading: '#fff',
        },
        select: {
            background: '#1e2d3e',
            text: '#6e7885',
        },
        topbar: {
            background: variables.topbar,
            text: '#fff',
        },
        searchBar: {
            background: darken(0.4, variables.topbar),
            placeholder: '#f1f1f1',
        },
        link: variables.topbar,
        separator: '#252b34',
    },
};
