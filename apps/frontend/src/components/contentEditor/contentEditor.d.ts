import {DraftEditorCommand as NativeDraftEditorCommand} from 'draft-js';

export type DraftEditorCommand = NativeDraftEditorCommand | 'hide-content';
