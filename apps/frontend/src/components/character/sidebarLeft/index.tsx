import React from 'react';
import Sidebar from '../../sidebar';
import List, {Item, ItemType} from '../../shared/list';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {
    EditorState,
    convertToRaw,
    convertFromRaw,
    RawDraftContentBlock,
} from 'draft-js';
import slugify from '../../../libs/slugify';
import Link from '../../shared/link';

const Inner = styled.div`
    padding: ${(props) => props.theme.spacing([0, 1])};
    font-size: 0.875em;
`;

const H2 = styled.h2`
    color: ${(props) => props.theme.colors.main.heading};
    margin-bottom: ${(props) => props.theme.spacing(0.5)};
`;

const headings = [
    'header-one',
    'header-two',
    'header-three',
    'header-four',
    'header-five',
    'header-six',
];

const editorState = EditorState.createWithContent(
    convertFromRaw(JSON.parse(localStorage.getItem('contentState') || '')),
);

function mapItems(
    headingBlock: RawDraftContentBlock,
    i: number,
    array: Array<RawDraftContentBlock>,
): Item | undefined {
    if (headingBlock.type === 'header-one') {
        return {
            type: ItemType.li,
            content: headingBlock.text,
            items: getChildItems(
                array.slice(i + 1, array.length),
                headingBlock.type,
            ),
            wrapper: {
                component: Link,
                props: {
                    href: `#${slugify(headingBlock.text)}`,
                },
            },
        };
    }
}

function getChildItems(
    array: Array<RawDraftContentBlock>,
    type: string,
): Array<Item | undefined> {
    const currentHeadingNumberIndex = headings.indexOf(type);
    const childItems = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const itemNumberIndex = headings.indexOf(item.type);
        const nextItem = array[i + 1] ? array[i + 1] : array[i];
        const nextItemNumberIndex = headings.indexOf(nextItem.type);

        if (itemNumberIndex <= currentHeadingNumberIndex) {
            break;
        }

        childItems.push({
            type: ItemType.li,
            content: item.text,
            items:
                nextItemNumberIndex > itemNumberIndex
                    ? getChildItems(array.slice(i + 1, array.length), item.type)
                    : [],
            wrapper: {
                component: Link,
                props: {
                    href: `#${slugify(item.text)}`,
                },
            },
        });
    }

    // @ts-ignore
    return childItems;
}

function generateStructure() {
    return {
        type: ItemType.ol,
        items: headingBlocks.map(mapItems).filter(Boolean),
    };
}

const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
const headingBlocks = blocks.filter((block) => headings.includes(block.type));

export default () => {
    const {t} = useTranslation();
    const test = generateStructure();
    console.log({test});
    return (
        <Sidebar side="left" role="navigation">
            <Inner>
                <H2>{t('aside.headingContent')}</H2>
                <List type={test.type} showBorder={true} items={test.items} />
            </Inner>
        </Sidebar>
    );
};
