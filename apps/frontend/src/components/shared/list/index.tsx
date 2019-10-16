import React from 'react';
import styled from 'styled-components';
import Link from '../../shared/link';

type Props = {
    type: ItemType;
    showBorder: boolean;
    items?: Array<Item>;
};

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const Ol = styled.ol`
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;

    > li {
        display: table;
        counter-increment: item;
        margin-bottom: ${(props) => props.theme.spacing(0.5)};
        padding: ${(props) => props.theme.spacing([1, 0])}

        &:before {
            content: counters(item, '.') '. ';
            display: table-cell;
            padding-right: ${(props) => props.theme.spacing(0.5)};
        }
    }
`;

const ULListItem = styled.li`
    padding: ${(props) => props.theme.spacing([1, 0])};
`;

const OLListItem = styled.li`
    ol > li {
        margin: 0;

        &:before {
            content: counters(item, '.') ' ';
        }
    }
`;

export enum ItemType {
    'ol' = 'ol',
    'ul' = 'ul',
    'li' = 'li',
}
export type Item = {
    type: ItemType;
    content?: string;
    items?: Array<Item>;
    wrapper?: {
        component: 'Link';
        props: Object;
    };
};

const Span = styled.span``;

const mapItems = (item: Item) => {
    // assume a list
    if (item.type !== ItemType.li && item.items) {
        const List = item.type === ItemType.ul ? Ul : Ol;
        return <List key={item.content}>{item.items.map(mapItems)}</List>;
    }

    const Li = item.type === ItemType.ul ? ULListItem : OLListItem;
    const Wrapper = item.wrapper ? Link : Span;
    const props = (item.wrapper && item.wrapper.props) || {};

    return (
        <Li key={item.content}>
            <Wrapper {...props}>{item.content}</Wrapper>
            {item.items && item.items.map(mapItems)}
        </Li>
    );
};

export default ({type, items}: Props) => {
    const List = type === ItemType.ul ? Ul : Ol;
    return <List>{items && items.map(mapItems)}</List>;
};
