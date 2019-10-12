import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {lighten} from 'polished';

const StyledLink = styled(Link)`
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    &:hover {
        color: ${(props) => lighten(0.1, props.theme.colors.link)};
    }
`;

type Props = {
    href: string;
    children: string;
};

export default ({href = '#', children}: Props) => (
    <StyledLink to={href}>{children}</StyledLink>
);
