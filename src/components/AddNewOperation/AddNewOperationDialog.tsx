import React,{ useState, ReactNode } from 'react';
import './AddNewOperationDialog.css';

interface CustomModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: ReactNode;
  }

const AddNewOperationDialog: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="customModal" onClick={(e) => e.stopPropagation()}>
            <div>
                <div className='customModalHeader'>
                <button className="close-button" onClick={closeModal}>
                      X
              </button>
                    <h3>Add New Operation</h3>
              </div>
            </div>
            <div className="custom-modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewOperationDialog;
