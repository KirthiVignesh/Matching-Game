import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import Monkey from '../../images/monkey.png';
import ModalButton from '../../images/modal-button.png'

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
                    <img className='monkey' src={Monkey} alt="monkey" />
                </div>
                <button className='btn' onClick={onClose}><img className='modal-close-btn' src={ModalButton} alt="modal-close" /></button>
            </div>
        </ReactModal>
    );
};

export default Modal;
