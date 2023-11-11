import React,{ useState, ReactNode } from 'react';
import './AddNewProjectDialog.css';

interface CustomModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: ReactNode;
  }

const AddNewProjectDialog: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="overlayProj" onClick={closeModal}>
          <div className="customModalProj" onClick={(e) => e.stopPropagation()}>
            <div>
                <div className='customModalHeaderProj'>
                    <h3>Add New Operation</h3>
              <button className="close-buttonProj" onClick={closeModal}>
                      X
              </button>
              </div>
            </div>
            <div className="custom-modal-contentProj">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewProjectDialog;
