import React from 'react';
import styled from 'styled-components';
import CampaignSwitcher from '../campaign/switcher';
import SidebarProfile from '../user/sidebarProfile';

export const Sidebar = styled.aside`
    display: flex;
    flex: 1 1 15%;
    min-height: calc(100vh - ${(props) => props.theme.spacing(2)});
    overflow-y: scroll;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.aside.background};
    color: ${(props) => props.theme.colors.aside.text};
    padding: ${(props) => props.theme.spacing(1)};
`;

export default () => (
    <Sidebar>
        <CampaignSwitcher />
        <SidebarProfile />
    </Sidebar>
);
