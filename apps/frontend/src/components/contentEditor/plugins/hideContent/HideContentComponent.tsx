import React, {ReactNode} from 'react';
import {ContentState} from 'draft-js';
import styled from 'styled-components';

type Props = {
    contentState: ContentState;
    entityKey: string;
    children: ReactNode;
};

export default (props: Props) => {
    const {contentState, entityKey, children} = props;
    console.log({props});
    const {ids} = contentState.getEntity(entityKey).getData();
    // @ts-ignore
    const shouldHide = ids.includes(12);
    const Component = styled.span`
        background-color: ${shouldHide ? 'transparent' : 'red'};
    `;
    return <Component>{shouldHide ? null : children}</Component>;
};
