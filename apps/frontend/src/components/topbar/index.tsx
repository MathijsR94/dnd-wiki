import React from 'react';
import styled from 'styled-components';
import CampaignSwitcher from '../campaign/switcher';

const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.topbar.background};
    height: 40px;
    width: 100%;
`;

export default () => <Topbar>{/* <CampaignSwitcher /> */}</Topbar>;
