import {ContentBlock} from 'draft-js';
import {PluginFunctions} from 'draft-js-plugins-editor';
import {Config} from '../';

export default (
    block: ContentBlock,
    {getEditorState}: PluginFunctions,
    config: Config,
) => {
    if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) {
            return null;
        }

        const type = contentState.getEntity(entity).getType();
        if (type === 'HIDE_CONTENT' || type === 'hide_content') {
            return {
                component: config.component,
                editable: true,
            };
        }
        return null;
    }

    return null;
};
