import React, { useState, useEffect } from 'react';
import './OperationListings.css';
import CustomButton from '../button/CustomButton';
import AddNewOperationDialog from '../AddNewOperation/AddNewOperationDialog';

interface MyComponentProps {
  projectToShowOprFor: string,
  setShowOperations :React.Dispatch<React.SetStateAction<string>>
}

interface Operation {
  operationName: string;
  toolName: string;
}

interface OperationsState {
  projectName: string;
  operations: Operation[];
}

const OperationsListings: React.FC<MyComponentProps> = ({projectToShowOprFor, setShowOperations}) => {

  const operationsDataAll = JSON.parse(localStorage.getItem(`${projectToShowOprFor}`) || '[]');
  const [projName, setProjectName] = useState<string>(`${projectToShowOprFor}`)
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [operationName, setOperationName] = useState<string>("");
  const [toolName, setToolName] = useState<string>("");
  const [operationNameToDelete, setOperationNameToDelete] = useState("");
  console.log(operationsDataAll)

  const [operationsData, setOperationsData] = useState<OperationsState>({
    projectName: `${projectToShowOprFor}`,
    operations: operationsDataAll.operations,
  });


  useEffect(()=>{
    setProjectName(`${projectToShowOprFor}`);
    setOperationsData({
    projectName: `${projectToShowOprFor}`,
      operations: operationsDataAll.operations || [],
    });

    },[projectToShowOprFor])

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOperationNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setOperationName(e.target.value);
  }

  const handleAddOperation = () => {
    if(operationName==="" || toolName===""){
      alert("Operation Name or Tool Name cannot be Empty!!!");
    }else{
    const updatedOperationsData = {...operationsData, operations: [
      ...operationsData.operations,
      { operationName, toolName }
    ]};
    localStorage.setItem(`${projectToShowOprFor}`, JSON.stringify(updatedOperationsData));
    setOperationsData(updatedOperationsData);
    console.log(operationsData)
  }
    closeModal();
  }

  const handleDeleteOperation=(data: any,ir:any)=>{
    const updatedArray = operationsDataAll.operations.filter((item: any,i:any) => {
      // if(item.projectName!==data.projectName && item.toolName !== data.toolName){
      //   return item;
      // }
      if(ir!==i){
        return item
      }
    });
    setOperationsData({
      projectName: `${projectToShowOprFor}`,
        operations: updatedArray || [],
      });
    localStorage.setItem(`${projectToShowOprFor}`, JSON.stringify({ projectName: `${projectToShowOprFor}`,
    operations: updatedArray}));
    console.log(updatedArray)
      //localStorage.removeItem(`${projectToShowOprFor}`,)
  }

  const handleSelectTool =(e: any)=>{
    console.log(e)
    setToolName(e.target.value)
  }

  return (
    <div className='operationsContainer'>
       { projectToShowOprFor.length>0 &&
      <div className='operationsListingsHeader'>
        <CustomButton btnText={`${projectToShowOprFor}`} btnType='createprojectsaved' />
      </div>}
      <div className='coreOperationsListings'>
        {
          operationsData?.operations?.length>0 &&(
            operationsData?.operations?.map((data, i)=>
            (<div className='operationsList ' key={i}>
              <CustomButton btnText={data.operationName} btnType='operationname'/>
              <CustomButton btnText={data.toolName} btnType='toolname'/>
              <div className='btnDelete' onClick={()=>handleDeleteOperation(data,i)}>
                <img className='btnDelete'  onClick={()=>handleDeleteOperation(data,i)} src={require('../assests/delete.png')} width="40px" height="40px"/>
                </div>
            </div>)
            )
          )
        }
      </div>
      <div>
      <CustomButton btnText='+' btnType='createnewoperation' openModal={openModal}/>
      <p>New Operation</p>
      </div>
      <AddNewOperationDialog isOpen={isModalOpen} onClose={closeModal}>
      
        <input style={{marginTop: "140px", width: "90%", padding: "8px"}} type='text' placeholder='Enter Name' onChange={handleOperationNameChange} className='inputOperationName' required={true}/>
        <br/>
        <button className='selectToolBtn'>Select Tool</button>
          <div style={{backgroundColor: 'aquamarine'}}>
          <option value="Tool D-2" onClick={handleSelectTool}>Tool D-2</option>
          <option value="Tool D-4" onClick={handleSelectTool}>Tool D-4</option>
          <option value="Tool D-6" onClick={handleSelectTool}>Tool D-6</option>
          <option value="Tool D-8" onClick={handleSelectTool}>Tool D-8</option>
          <option value="Tool D-10" onClick={handleSelectTool}>Tool D-10</option>
          </div>
          <CustomButton btnText='Add' btnType='addnewoperation' onCreateProject={handleAddOperation}/>
      </AddNewOperationDialog>
    </div>
  );
};

export default OperationsListings;