import React, { useState } from 'react';
import './App.css';
import ProjectListings from './components/ProjectsListings/ProjectListings';
import OperationsListings from './components/OperationListings/OperationListings';

function App() {
  const [showOperations, setShowOperations] = useState<string>('');
  console.log(showOperations)
  return (
    <div className='App'>
      <ProjectListings setShowOperations={setShowOperations}/>
      <OperationsListings projectToShowOprFor ={showOperations} setShowOperations={setShowOperations}/>
    </div>
  );
}

export default App;
