import React, {ReactNode, ReactElement, Fragment} from 'react';
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

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.main.heading};
    }
`;

type Props = {
    children: ReactNode;
    sidebarLeft?: ReactElement;
    sidebarRight?: ReactElement;
};

export default ({children, sidebarLeft, sidebarRight}: Props) => (
    <Fragment>
        {sidebarLeft}
        <Main>
            <Content>{children}</Content>
        </Main>
        {sidebarRight}
    </Fragment>
);
