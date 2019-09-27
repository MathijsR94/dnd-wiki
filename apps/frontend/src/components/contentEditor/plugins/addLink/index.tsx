import React, {ReactNode} from 'react';
import {
    RichUtils,
    KeyBindingUtil,
    EditorState,
    ContentBlock,
    ContentState,
    DraftEditorCommand,
} from 'draft-js';
import {EditorPlugin, PluginFunctions} from 'draft-js-plugins-editor';
import styled from 'styled-components';
import entities from '../../entities';

type Props = {
    contentState: ContentState;
    entityKey: string;
    children: ReactNode;
};

export const linkStrategy = (
    contentBlock: ContentBlock,
    callback: (start: number, end: number) => void,
    contentState: ContentState,
) => {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
        );
    }, callback);
};

export const Link = (props: Props): ReactNode => {
    const {contentState, entityKey} = props;
    const {url} = contentState.getEntity(entityKey).getData();
    const StyledLink = styled.a`
        color: red;
    `;
    return (
        <StyledLink
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={url}
        >
            {props.children}
        </StyledLink>
    );
};

const addLinkPlugin: EditorPlugin = {
    // @ts-ignore
    keyBindingFn(
        event: React.KeyboardEvent<Element>,
        {getEditorState}: PluginFunctions,
    ) {
        const editorState = getEditorState();
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
            return null;
        }
        if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
            return 'add-link';
        }
    },
    // @ts-ignore
    handleKeyCommand(
        command: DraftEditorCommand,
        editorState: EditorState,
        {getEditorState, setEditorState}: PluginFunctions,
    ) {
        // @ts-ignore
        if (command !== 'add-link') {
            return 'not-handled';
        }
        const link = window.prompt('Paste the link -');
        const selection = editorState.getSelection();
        if (!link) {
            setEditorState(RichUtils.toggleLink(editorState, selection, null));
            return 'handled';
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity(
            entities.link,
            'MUTABLE',
            {
                url: link,
            },
        );
        const newEditorState = EditorState.push(
            editorState,
            contentWithEntity,
            'apply-entity',
        );
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        setEditorState(
            RichUtils.toggleLink(newEditorState, selection, entityKey),
        );
        return 'handled';
    },

    decorators: [
        {
            strategy: linkStrategy,
            component: Link,
        },
    ],
};

export default addLinkPlugin;
