import React from 'react';
import ReactModal from 'react-modal';
import './ModalPP.css';

const ModalPP = ({isOpen, onClose, content}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onClose={onClose}
            contentLabel='Popup Modal'
            className="modalPP"
            overlayClassName="modalPP-overlay"
        >
            <div>
                {content}
            </div>
            <button onClick={onClose}>Close</button>
        </ReactModal>
    )
}

export default ModalPP;