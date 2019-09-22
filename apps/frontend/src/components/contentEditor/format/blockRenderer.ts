import { ContentBlock } from 'draft-js';
import AtomicBlock from '../components/AtomicBlock';

export default function(contentBlock: ContentBlock) {
  const type = contentBlock.getType();
  if (type === 'atomic') {
    console.log({ type });

    return {
      editable: false,
      component: AtomicBlock
    };
  }
}
