import React from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '../shared/themeSwitch';

const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.topbar.background};
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1 1 25%;
    display: flex;
    justify-content: flex-start;
    padding: 0 ${(props) => props.theme.spacing(1)};
`;

const Center = styled.div`
    flex: 1 1 50%;
    display: flex;
    padding: 0 ${(props) => props.theme.spacing(1)};
`;

const Right = styled.div`
    flex: 1 1 25%;
    display: flex;
    justify-content: flex-end;
    padding: 0 ${(props) => props.theme.spacing(1)};
`;

export default () => (
    <Topbar>
        <Left></Left>
        <Center></Center>
        <Right>
            <ThemeSwitcher />
        </Right>
    </Topbar>
);
