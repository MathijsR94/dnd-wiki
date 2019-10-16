import React from 'react';
import styled from 'styled-components';
import {lighten} from 'polished';

const Link = styled.a`
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    &:hover {
        color: ${(props) => lighten(0.1, props.theme.colors.link)};
    }
`;

type Props = {
    href?: string;
    children?: string;
};

export default ({href = '#', children}: Props) => (
    <Link href={href}>{children}</Link>
);
