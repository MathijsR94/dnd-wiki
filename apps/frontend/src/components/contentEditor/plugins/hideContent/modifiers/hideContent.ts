import {EditorState, Modifier} from 'draft-js';
export type HideContent = (
    editorState: EditorState,
    handleSelect: () => Promise<Array<number>>,
    selectionKey: string,
) => Promise<EditorState>;

export default async (
    editorState: EditorState,
    handleSelect: () => Promise<Array<number>>,
    selectionKey: string,
) => {
    const type = 'HIDE_CONTENT';
    const select = await handleSelect();
    const contentState = editorState.getCurrentContent();
    if (!select) {
        return EditorState.forceSelection(
            editorState,
            contentState.getSelectionAfter(),
        );
    }

    const selectionState = editorState.getSelection();
    const contentWithEntity = contentState.createEntity(type, 'MUTABLE', {
        [selectionKey]: select,
    });

    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    const textWithEntity = Modifier.applyEntity(
        contentWithEntity,
        selectionState,
        entityKey,
    );

    const newEditorState = EditorState.push(
        editorState,
        textWithEntity,
        'apply-entity',
    );

    return EditorState.forceSelection(
        newEditorState,
        textWithEntity.getSelectionAfter(),
    );
};
