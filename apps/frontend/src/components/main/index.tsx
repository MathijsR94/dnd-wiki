import React, {ReactNode, ReactElement, Fragment} from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex: 1 1 75%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 ${(props: Props) =>
        props.sidebarLeft || props.sidebarRight ? `85%` : `100%`};
    background-color: ${(props) => props.theme.colors.main.background}
    color: ${(props) => props.theme.colors.main.text}
    padding: ${(props) => props.theme.spacing(4)}

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.main.heading};
    }
`;

// const ContentSidebar = styled(Sidebar)`
//     display: flex;
//     flex: 1 1 35%;
//     flex-direction: column;
//     background-color: ${(props) => props.theme.colors.aside.background}
//     color: ${(props) => props.theme.colors.aside.text}
//     padding: ${(props) => props.theme.spacing(1)}
// `;

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
