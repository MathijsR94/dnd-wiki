import React, {Component, ReactNode, Fragment, createRef} from 'react';
import {
    EditorState,
    RichUtils,
    DraftHandleValue,
    convertFromRaw,
    RawDraftContentState,
    AtomicBlockUtils,
    convertToRaw,
} from 'draft-js';
import Editor, {EditorPlugin, composeDecorators} from 'draft-js-plugins-editor';
import Toolbar, {staticToolbarPlugin} from './components/Toolbar';
import {Map} from 'immutable';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import blockRenderer from './format/blockRenderer';
import entities from './entities';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './css/editorButtons.css';
import './css/editor.css';

/**
 * Plugins
 */
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const decorator = composeDecorators(
    alignmentPlugin.decorator,
    focusPlugin.decorator,
);
const imagePlugin = createImagePlugin({decorator});
const {AlignmentTool} = alignmentPlugin;

const blockRenderMap = Map({
    unstyled: {
        element: 'p',
    },
});

type Props = {
    body?: RawDraftContentState;
};

type State = {
    editorState: EditorState;
};

class ContentEditor extends Component<Props, State> {
    plugins: Array<EditorPlugin> = [
        staticToolbarPlugin,
        focusPlugin,
        alignmentPlugin,
        imagePlugin,
    ];
    editor = createRef<Editor>();

    constructor(props: Props) {
        super(props);
        const editorState = props.body
            ? EditorState.createWithContent(convertFromRaw(props.body))
            : EditorState.createEmpty();

        this.state = {
            editorState,
        };
    }

    onChange = (e: EditorState) => {
        console.log(JSON.stringify(convertToRaw(e.getCurrentContent())));
        this.setState({editorState: e});
    };

    handleKeyCommand = (
        command: string,
        editorState: EditorState,
    ): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    onAddImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const {editorState} = this.state;
        const urlValue = window.prompt('Paste Image Link');
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            entities.image,
            'IMMUTABLE',
            {src: urlValue},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        });

        this.setState(
            {
                editorState: AtomicBlockUtils.insertAtomicBlock(
                    newEditorState,
                    entityKey,
                    ' ',
                ),
            },
            () => {
                setTimeout(() => this.focus(), 0);
            },
        );
    };

    focus = () => {
        if (this.editor && this.editor.current) {
            this.editor.current.focus();
        }
    };

    render(): ReactNode {
        const {editorState} = this.state;
        return (
            <Fragment>
                <Editor
                    ref={this.editor}
                    editorState={editorState}
                    onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                    blockRendererFn={blockRenderer}
                    blockRenderMap={blockRenderMap}
                    plugins={this.plugins}
                />
                <Toolbar onAddImage={this.onAddImage} />
                <AlignmentTool />
            </Fragment>
        );
    }
}

export default ContentEditor;
