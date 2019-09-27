import {ReactNode} from 'react';
import hideContent, {HideContent} from './modifiers/hideContent';
import HideContentComponent from './HideContentComponent';
import {ContentBlock} from 'draft-js';
import {PluginFunctions, EditorPlugin} from 'draft-js-plugins-editor';
import hideContentStrategy from './strategy';
import blockRendererFn from './blockRendererFn';

export interface Config {
    component?: ReactNode;
    handleSelect: () => Promise<Array<number>>;
    selectionKey: string;
}

export type HideContentPlugin = EditorPlugin & {hideContent: HideContent};

const defaultConfig = {
    component: HideContentComponent,
    handleSelect: () => Promise.resolve([]),
    selectionKey: 'hideContent',
};

export default (config: Config = defaultConfig): HideContentPlugin => {
    return {
        blockRendererFn: (
            block: ContentBlock,
            pluginFunctions: PluginFunctions,
        ) => blockRendererFn(block, pluginFunctions, config),
        decorators: [
            {
                strategy: hideContentStrategy,
                component: HideContentComponent,
            },
        ],
        hideContent,
    };
};

export {HideContentComponent};
