import React,{ useEffect, useState } from 'react';
import CustomButton from '../button/CustomButton';
import './ProjectListings.css';
import AddNewProjectDialog from '../AddNewProject/AddNewProjectDialog';

interface ProjectListingsProps {
  setShowOperations: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectListings: React.FC<ProjectListingsProps> = ({setShowOperations}) => {
  
  const projectsDataAll: string[] = JSON.parse(localStorage.getItem('projectsData') || '[]');

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [projectName, setProjectName] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleProjectNameChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setProjectName(e.target.value)
  }

  const handleAddProject=()=>{
    const updatedProjectsData = [...projectsData, projectName];
    localStorage.setItem("projectsData", JSON.stringify(updatedProjectsData));
    setProjectsData(updatedProjectsData);
    closeModal();
  }

  const handleProjectName =(e: React.MouseEvent<HTMLButtonElement>,i:number)=> {
    console.log(typeof(i))
    setShowOperations(e.currentTarget.innerText)
  }

  return (
    <div className='projectsContainer'>
      {
        projectsDataAll.length>0 &&
        projectsDataAll.map((projectData, i)=>{
          return(
            <div key={i}>
                <CustomButton key={i} btnType='createprojectsaved' btnText={projectData} onProjectNameClick={(e)=>handleProjectName(e,i)}/>
            </div>
          )
        })
      }
      <br/>
      <CustomButton btnText='Create New' btnType='createproject' openModal={openModal}/>
      <AddNewProjectDialog isOpen={isModalOpen} onClose={closeModal}>
        <input type='text' placeholder='Enter Project Name' onChange={handleProjectNameChange} className='inputProjName' required/>
        <br/>
       <CustomButton btnText='Create' btnType='createnew' onCreateProject={handleAddProject}/>
      </AddNewProjectDialog>
    </div>
  );
};

export default ProjectListings;