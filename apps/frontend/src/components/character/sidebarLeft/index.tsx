import React from 'react';
import Sidebar from '../../sidebar';
import List, {Item, ItemType} from '../../shared/list';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const Inner = styled.div`
    padding: ${(props) => props.theme.spacing([0, 1])};
    font-size: 0.875em;
`;

const list: Item = {
    type: ItemType.ol,
    items: [
        {
            type: ItemType.li,
            content: 'A Red Dragon’s Lair',
            wrapper: {
                component: 'Link',
                props: {
                    href: '#a-red-dragons-lair',
                },
            },
            items: [
                {
                    type: ItemType.ol,
                    items: [
                        {
                            type: ItemType.li,
                            content: 'Regional Effects',
                            wrapper: {
                                component: 'Link',
                                props: {
                                    href: '#regional-effects',
                                },
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

const H2 = styled.h2`
    color: ${(props) => props.theme.colors.main.heading};
    margin-bottom: ${(props) => props.theme.spacing(0.5)};
`;

export default () => {
    const {t} = useTranslation();
    return (
        <Sidebar side="left" role="navigation">
            <Inner>
                <H2>{t('aside.headingContent')}</H2>
                <List type={list.type} showBorder={true} items={list.items} />
            </Inner>
        </Sidebar>
    );
};
