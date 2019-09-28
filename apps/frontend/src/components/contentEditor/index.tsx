import React, {
    Component,
    ReactNode,
    Fragment,
    createRef,
    useState,
} from 'react';
import {
    EditorState,
    RichUtils,
    DraftHandleValue,
    convertFromRaw,
    RawDraftContentState,
    convertToRaw,
} from 'draft-js';
import Editor, {EditorPlugin, composeDecorators} from 'draft-js-plugins-editor';
import Toolbar, {staticToolbarPlugin} from './components/Toolbar';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createHideContentPlugin, {
    HideContentPlugin,
} from './plugins/hideContent';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './css/editorButtons.css';
import './css/editor.css';
import {useModal} from 'react-modal-hook';
import Modal from '../shared/modal';
import useLocalStorage from '../../hooks/useLocalStorage';
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const decorator = composeDecorators(
    alignmentPlugin.decorator,
    focusPlugin.decorator,
);
const imagePlugin = createImagePlugin({decorator});
const {AlignmentTool} = alignmentPlugin;

let hideContentPlugin: HideContentPlugin;

type Props = {
    body?: RawDraftContentState;
    editMode: boolean;
};

type State = {
    editorState: EditorState;
};

const ContentEditor = ({body, editMode}: Props) => {
    const initEditorState = body
        ? EditorState.createWithContent(convertFromRaw(body))
        : EditorState.createEmpty();
    const [editorState, setEditorState] = useState(initEditorState);

    hideContentPlugin = createHideContentPlugin({
        handleSelect: handleIdSelect,
        selectionKey: 'ids',
    });
    const plugins = [
        hideContentPlugin,
        staticToolbarPlugin,
        focusPlugin,
        alignmentPlugin,
        imagePlugin,
    ];
    const [setContentState] = useLocalStorage('contentState', editorState);

    const [showModal] = useModal(({isOpen}) => (
        <Modal isOpen={isOpen}>
            <span>Joe!</span>
        </Modal>
    ));

    function onChange(e: EditorState) {
        setContentState(JSON.stringify(convertToRaw(e.getCurrentContent())));
        setEditorState(e);
    }

    function handleKeyCommand(
        command: string,
        editorState: EditorState,
    ): DraftHandleValue {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    async function hideContent() {
        if (hideContentPlugin) {
            hideContentPlugin
                .hideContent(editorState, handleIdSelect, 'ids')
                .then((newEditorState) => onChange(newEditorState))
                .catch((err) => console.error(err));
        }
    }

    function handleIdSelect(): Promise<Array<number>> {
        // @ts-ignore
        return showModal();
    }

    return (
        <Fragment>
            <Editor
                editorState={editorState}
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
                plugins={plugins}
                readOnly={!editMode}
            />
            {editMode && (
                <Fragment>
                    <Toolbar hideContent={hideContent} />
                    <AlignmentTool />
                </Fragment>
            )}
        </Fragment>
    );
};

export default ContentEditor;
