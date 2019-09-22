import React from 'react';
import { ContentBlock, ContentState } from 'draft-js';

type Props = {
  block: ContentBlock;
  contentState: ContentState;
};

export default ({ block, contentState }: Props) => {
  const entityKey = block.getEntityAt(0);
  console.log('sanity', entityKey);
  if (entityKey) {
    const entity = contentState.getEntity(entityKey);
    const data = entity.getData();
    const type = entity.getType();
    console.log({ entity, data, type });
  }
  return <div />;
};
