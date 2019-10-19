import React from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '../shared/themeSwitch';
import SearchBar from '../shared/search';
import {rgba} from 'polished';

const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.topbar.background};
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 -10px 10px -10px
        ${(props) => rgba(props.theme.colors.searchBar.placeholder, 0.1)};
`;

const Left = styled.div`
    flex: 0 0 ${(props) => props.theme.layout.left};
    display: flex;
    justify-content: flex-start;
    padding: ${(props) => props.theme.spacing([0, 1, 0, 0])};
`;

const Center = styled.div`
    flex: 1 1 ${(props) => props.theme.layout.center};
    display: flex;
    padding: 0 ${(props) => props.theme.spacing(1)};
`;

const Right = styled.div`
    flex: 0 0 ${(props) => props.theme.layout.right};
    display: flex;
    justify-content: flex-end;
    padding: 0 ${(props) => props.theme.spacing(1)};
`;

export default () => (
    <Topbar>
        <Left>
            <SearchBar />
        </Left>
        <Center>
            <p>asddsa</p>
        </Center>
        <Right>
            <ThemeSwitcher />
        </Right>
    </Topbar>
);
