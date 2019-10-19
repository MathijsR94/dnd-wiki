import React, {ReactNode, ReactElement} from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1
    ${({theme: {layout}}) =>
        100 -
        parseInt(layout.left.split('%')[0], 10) -
        parseInt(layout.right.split('%')[0], 10)}%;
    background-color: ${(props) => props.theme.colors.main.background}
    color: ${(props) => props.theme.colors.main.text}
    padding: ${(props) => props.theme.spacing(4)}
`;

type Props = {
    children: ReactNode;
    sidebarLeft?: ReactElement;
    sidebarRight?: ReactElement;
};

export default ({children, sidebarLeft, sidebarRight}: Props) => (
    <Main>
        {sidebarLeft}
        <Content>{children}</Content>
        {sidebarRight}
    </Main>
);
