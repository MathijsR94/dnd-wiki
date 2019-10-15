import React, {useState} from 'react';
import styled from 'styled-components';
import {useTheme} from '../../../hooks/effects/useTheme';

const ThemeSwitch = styled.div`
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 40px;
`;

const CheckBox = styled.input`
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;

    &:checked + span {
        background-color: ${(props) => props.theme.themeSwitch.dark.background};
    }

    &:active + span {
        opacity: 0.5;
    }

    &:checked + span:before {
        background-color: ${(props) => props.theme.themeSwitch.dark.background};
        transform: translate(21px, -6px);
    }

    &:checked + span:after {
        background-color: ${(props) =>
            props.theme.themeSwitch.light.background};
        transform: translate(27px, 0px);
    }
`;

const Span = styled.span`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    opacity: 1;
    background-color: ${(props) => props.theme.themeSwitch.light.background};
    border-radius: 40px;
    transition: 0.15s ease background-color, 0.15s ease opacity;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: 0.5s ease transform, 0.15s ease background-color;
    }

    &:before {
        background-color: #fff;
        transform: translate(-20px, 0px);
        z-index: 1;
    }

    &:after {
        background-color: ${(props) => props.theme.themeSwitch.dark.background};
        transform: translate(4px, 0);
        z-index: 0;
    }
`;

export default () => {
    const themeState = useTheme();
    const [checked, setChecked] = useState(themeState.dark);

    function onClick() {
        setChecked(!checked);
        themeState.toggleTheme();
    }

    function onChange() {}

    return (
        <ThemeSwitch>
            <CheckBox type="checkbox" checked={checked} onChange={onChange} />
            <Span onClick={onClick} />
        </ThemeSwitch>
    );
};
