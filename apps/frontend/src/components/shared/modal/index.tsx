import React, {ReactNode} from 'react';
import ReactModal from 'react-modal';
import {useModal} from 'react-modal-hook';

ReactModal.setAppElement('#root');

type Props = {
    children: ReactNode;
    isOpen: boolean;
    shouldCloseOnOverlayClick?: boolean;
};

export default ({
    children,
    isOpen,
    shouldCloseOnOverlayClick = true,
}: Props) => {
    return (
        <ReactModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        >
            {children}
        </ReactModal>
    );
};
