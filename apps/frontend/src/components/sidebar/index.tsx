import React, {ReactNode} from 'react';
import styled from 'styled-components';

type Props = {
    side: 'left' | 'right';
    children: ReactNode;
    role?: 'navigation' | 'complementary';
};

const Sidebar = styled.div`
    display: flex;
    flex: 1 1 ${(props) => props.theme.layout[props.side]};
    min-height: calc(100vh - ${(props) => props.theme.spacing(2)});
    overflow-y: scroll;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.aside.background};
    color: ${(props) => props.theme.colors.aside.text};
    position: relative;

    &:after {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        ${(props: Props) => (props.side === 'left' ? 'right: 0' : 'left: 0')}
        width: 25px;
        box-shadow: inset
            ${(props: Props) =>
                props.side === 'left' ? '-7px 0 9px -7px' : '10px 0 14px -4px'}
            ${(props) => props.theme.colors.aside.shadow};
    }
`;

export default ({role, ...rest}: Props) => <Sidebar role={role} {...rest} />;
