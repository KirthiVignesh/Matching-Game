import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

const Modal = ({isOpen, onClose, content}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onClose={onClose}
            contentLabel='Popup Modal'
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div>
                {content}
                <div>
                    <img className='monkey' src={require('..\\public\\monkey.png')} alt="monkey" />
                </div>
                <button className='btn' onClick={onClose}><img className='modal-close-btn' src={require('..\\public\\modal-button.png')} alt="modal-close" /></button>
            </div>
        </ReactModal>
    );
};

export default Modal;
