import React, { ChangeEvent } from 'react';
import './CustomButton.css';

interface CustomButtonProps {
  btnType ?: string,
  btnText: string,
  openModal ?:()=> void,
  onCreateProject ?:() => void,
  onProjectNameClick ?: (e: React.MouseEvent<HTMLButtonElement>, i?: number) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ btnType, btnText, openModal, onCreateProject, onProjectNameClick }) => {
  return (
    <>
      { btnType ==="createproject" &&
        <button className={btnType ==="createproject"? "createnewproject": ''}
     onClick={openModal} >{btnText}</button>
  }
  <br/>
  {
    btnType ==="createnew" &&
     <button className={btnType ==="createnew"? "createnewproject": ''}
     onClick={onCreateProject} >{btnText}</button>
   }
    {
    btnType ==="createprojectsaved" &&
     <button className={btnType ==="createprojectsaved"? "createdproj": ''}
     onClick={onProjectNameClick} >{btnText}</button>
   }
  
   {
    btnType ==="addnewoperation" &&
     <button className={btnType ==="addnewoperation"? "createnewproject": ''}
     onClick={onCreateProject} >{btnText}</button>
   }
      {
    btnType ==="operationname" &&
     <button className={btnType ==="operationname"? "operationname": ''}
     onClick={onCreateProject} >{btnText}</button>
   }
      {
    btnType ==="toolname" &&
     <button className={btnType ==="toolname"? "toolname": ''}
     onClick={onCreateProject} >{btnText}</button>
   }
    { btnType ==="createnewoperation" &&
        <button className={btnType ==="createnewoperation"? "createnewoperation": ''}
     onClick={openModal} >{btnText}</button>
  }
    </>
  );
};

export default CustomButton;