import React from 'react';
import {EditorBlock} from 'draft-js';
import slugify from '../../../../libs/slugify';

type Props = {
    blockProps: {
        text: string;
    };
};

export default ({blockProps, ...rest}: Props) => (
    <span id={slugify(blockProps.text)}>
        <EditorBlock {...rest} {...blockProps} />
    </span>
);
