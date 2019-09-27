import {ContentBlock, ContentState} from 'draft-js';

export default (
    contentBlock: ContentBlock,
    cb: (start: number, end: number) => void,
    contentState: ContentState,
) => {
    if (!contentState) return;
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'HIDE_CONTENT'
        );
    }, cb);
};
