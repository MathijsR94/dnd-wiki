import React, {Component, ReactNode, Fragment, createRef} from 'react';
import {
    EditorState,
    RichUtils,
    DraftHandleValue,
    convertFromRaw,
    RawDraftContentState,
    AtomicBlockUtils,
    convertToRaw,
    Entity,
    Modifier,
} from 'draft-js';
import Editor, {EditorPlugin, composeDecorators} from 'draft-js-plugins-editor';
import Toolbar, {staticToolbarPlugin} from './components/Toolbar';
import {Map} from 'immutable';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createHideContentPlugin, {
    HideContentPlugin,
} from './plugins/hideContent';
import blockRenderer from './format/blockRenderer';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './css/editorButtons.css';
import './css/editor.css';

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

let hideContentPlugin: HideContentPlugin;

type Props = {
    body?: RawDraftContentState;
    editMode: boolean;
};

type State = {
    editorState: EditorState;
};

class ContentEditor extends Component<Props, State> {
    plugins: Array<EditorPlugin> = [];
    editor = createRef<Editor>();

    constructor(props: Props) {
        super(props);
        const editorState = props.body
            ? EditorState.createWithContent(convertFromRaw(props.body))
            : EditorState.createEmpty();

        this.state = {
            editorState,
        };

        hideContentPlugin = createHideContentPlugin({
            handleSelect: this.handleIdSelect,
            selectionKey: 'ids',
        });

        this.plugins = [
            hideContentPlugin,
            staticToolbarPlugin,
            focusPlugin,
            alignmentPlugin,
            imagePlugin,
        ];
    }

    onChange = (e: EditorState) => {
        localStorage.setItem(
            'contentState',
            JSON.stringify(convertToRaw(e.getCurrentContent())),
        );
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

    handleIdSelect = (): Promise<Array<number>> => {
        return Promise.resolve([1, 2]);
    };

    focus = () => {
        if (this.editor && this.editor.current) {
            this.editor.current.focus();
        }
    };

    hideContent = async () => {
        if (hideContentPlugin) {
            const {editorState} = this.state;
            hideContentPlugin
                .hideContent(editorState, this.handleIdSelect, 'ids')
                .then((newEditorState) => this.onChange(newEditorState))
                .catch((err) => console.error(err));
        }
    };

    render(): ReactNode {
        const {editorState} = this.state;
        const {editMode} = this.props;
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
                    readOnly={!editMode}
                />
                {editMode && (
                    <Fragment>
                        <Toolbar />
                        <button onClick={this.hideContent}>Hide</button>
                        <AlignmentTool />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default ContentEditor;
