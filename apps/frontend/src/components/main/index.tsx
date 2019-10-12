import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex: 1 1 75%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 ${(props: Props) => (props.showSidebar ? `85%` : `100%`)};
    background-color: ${(props) => props.theme.colors.main.background}
    color: ${(props) => props.theme.colors.main.text}
    padding: ${(props) => props.theme.spacing([1, 2])}
`;

const ContentSidebar = styled.div`
    display: flex;
    flex: 1 1 25%;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.aside.background}
    color: ${(props) => props.theme.colors.aside.text}
    padding: ${(props) => props.theme.spacing(1)}
`;

type Props = {
    children: ReactNode;
    showSidebar?: boolean;
};

export default ({children, showSidebar = true}: Props) => (
    <Main>
        <Content>{children}</Content>
        {showSidebar && <ContentSidebar />}
    </Main>
);
