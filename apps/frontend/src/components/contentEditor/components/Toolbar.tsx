import React from 'react';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  OrderedListButton,
  UnorderedListButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from 'draft-js-buttons';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

import '../css/toolbar.css';

type Props = {
  onAddImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const inlineToolbarPlugin = createInlineToolbarPlugin();
export const staticToolbarPlugin = createToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

const buttons = [
  ItalicButton,
  BoldButton,
  UnderlineButton,
  OrderedListButton,
  UnorderedListButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton
];

const theme = {
  active: 'toolbar__button toolbar__button--active',
  button: 'toolbar__button',
  buttonWrapper: 'toolbar__button-wrapper'
};

export default ({ onAddImage }: Props) => (
  <InlineToolbar>
    {({ setEditorState, getEditorState }) => (
      <React.Fragment>
        {buttons.map(Button => (
          <Button
            key={Button.displayName}
            theme={theme}
            setEditorState={setEditorState}
            getEditorState={getEditorState}
          />
        ))}
        {/* <button className={theme.button} onClick={onAddImage}></button> */}
      </React.Fragment>
    )}
  </InlineToolbar>
);
