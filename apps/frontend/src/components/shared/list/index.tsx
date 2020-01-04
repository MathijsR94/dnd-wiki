import React, {ComponentType} from 'react';
import styled from 'styled-components';

type Props = {
    type: ItemType;
    showBorder: boolean;
    items: Array<Item | undefined>;
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
        padding: ${(props) => props.theme.spacing([0.5, 0])}

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
    items?: Array<Item | undefined>;
    wrapper?: {
        component: ComponentType;
        props: Object;
    };
};

const Span = styled.span``;

const mapItems = (item: Item | undefined, type: ItemType) => {
    if (!item) return;
    const ListItem = type === ItemType.ul ? ULListItem : OLListItem;
    const Wrapper =
        item.wrapper && item.wrapper.component ? item.wrapper.component : Span;
    const props = item.wrapper ? item.wrapper.props : {};

    if (item.items && item.items.length > 0) {
        const List = type === ItemType.ul ? Ul : Ol;
        return (
            <ListItem>
                <Wrapper {...props}>{item.content}</Wrapper>
                <List>
                    {item.items
                        .map((item) => mapItems(item, type))
                        .filter(Boolean)}
                </List>
            </ListItem>
        );
    }

    return (
        <ListItem>
            <Wrapper {...props}>{item.content}</Wrapper>
        </ListItem>
    );
};

export default ({type, items}: Props) => {
    const List = type === ItemType.ul ? Ul : Ol;
    return (
        <List>
            {items && items.map((item) => mapItems(item, type)).filter(Boolean)}
        </List>
    );
};
