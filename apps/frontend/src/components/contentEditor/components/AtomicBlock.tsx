import React from 'react';
import {ContentBlock, ContentState, EditorState} from 'draft-js';
import entities from '../entities';
import {HideContentComponent} from '../plugins/hideContent';

type Props = {
    block: ContentBlock;
    contentState: ContentState;
    editorState: EditorState;
};

export default ({block, contentState}: Props) => {
    const entityKey = block.getEntityAt(0);
    if (entityKey) {
        const entity = contentState.getEntity(entityKey);
        const data = entity.getData();
        const type = entity.getType();
        const selectedText = block.values;

        switch (type) {
            case entities.hideContent:
                return (
                    <HideContentComponent
                        contentState={contentState}
                        entityKey={entityKey}
                    >
                        {selectedText}
                    </HideContentComponent>
                );
            default:
                return null;
        }
    }
    return <div />;
};
