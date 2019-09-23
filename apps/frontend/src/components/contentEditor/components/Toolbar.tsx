import React, {Fragment} from 'react';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    OrderedListButton,
    UnorderedListButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    CodeButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';
import createToolbarPlugin, {Separator} from 'draft-js-static-toolbar-plugin';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import '../css/toolbar.css';

type Props = {
    onAddImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const staticToolbarPlugin = createToolbarPlugin();
const {Toolbar} = staticToolbarPlugin;

const theme = {
    active: 'toolbar__button toolbar__button--active',
    button: 'toolbar__button',
    buttonWrapper: 'toolbar__button-wrapper',
};

export default ({onAddImage}: Props) => (
    <Toolbar>
        {(externalProps: any) => (
            <Fragment>
                <BoldButton theme={theme} {...externalProps} />
                <ItalicButton theme={theme} {...externalProps} />
                <UnderlineButton theme={theme} {...externalProps} />
                <CodeButton theme={theme} {...externalProps} />
                <Separator theme={theme} {...externalProps} />
                <HeadlineOneButton theme={theme} {...externalProps} />
                <HeadlineTwoButton theme={theme} {...externalProps} />
                <HeadlineThreeButton theme={theme} {...externalProps} />
                <UnorderedListButton theme={theme} {...externalProps} />
                <OrderedListButton theme={theme} {...externalProps} />
                <BlockquoteButton theme={theme} {...externalProps} />
                <CodeBlockButton theme={theme} {...externalProps} />
            </Fragment>
        )}
    </Toolbar>
);
