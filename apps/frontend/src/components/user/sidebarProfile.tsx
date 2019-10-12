import React from 'react';
import styled from 'styled-components';
import {useTheme, Themes} from '../../hooks/effects/useTheme';

const user = {
    id: 1,
    fullName: 'Aleesia Trismoira',
    race: 'Half-Elf',
    class: 'Druid',
    avatar: 'https://placehold.it/75x75',
    level: 4,
};

const SidebarProfile = styled.div`
    display: flex;
    margin: ${(props) => props.theme.spacing([2, 0])};
`;

const SidebarProfileAvatar = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 0.5em;

    img {
        border-radius: 50%;
    }
`;

const SidebarProfileInfo = styled.div`
    h3 {
        font-size: 1.2em;
        margin: 0;
        color: ${(props) => props.theme.colors.aside.heading};
    }

    p {
        margin: 0;
        font-size: 0.875em;
    }
`;

export default () => {
    const themeState = useTheme();

    return (
        <SidebarProfile>
            <SidebarProfileAvatar>
                <img src={user.avatar} />
            </SidebarProfileAvatar>
            <SidebarProfileInfo>
                <h3>{user.fullName}</h3>
                <p>
                    Level {user.level} {user.race} {user.class}
                </p>
                <button onClick={themeState.toggleTheme}>Switch theme</button>
            </SidebarProfileInfo>
        </SidebarProfile>
    );
};
