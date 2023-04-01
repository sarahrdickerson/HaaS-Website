import React, { useState } from "react";
import '../../../App.css';
import TextField from '@material-ui/core/TextField'
import Button from '@mui/material/Button';
import Inventory from './inventory.js';

function PromptProjects() {
  const [clicked, setClicked] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [newProjectID, setNewProjectID] = useState('');
  const [projectID, setProjectID] = useState('');
  const [projectName, setProjectName] = useState('');

  const handleClick = () => {
    if (clicked) {
      setShowInventory(true);
    }
    setClicked(!clicked);
  };

  const containerClass = clicked ? "project-container-clicked" : "project-container";

  if (showInventory) {
    return <Inventory />;
  }

  return (
    <div className="projects-container-wrapper">
      <div className="projects-container">
        <h1> <b>Join Project</b></h1>
        <input value={projectID} onChange={(e) => setProjectID(e.target.value)} type="projectID" placeholder="Enter Project ID" id="projectID" name="projectID"></input>
        <div className="button-container">
          <h1>
            <Button
              className="button"
              sx={{
                backgroundColor: 'lightgray',
                color: 'black',
                textTransform: 'none',
                borderRadius: '0',
                width: '100px',
                height: '50px',
                fontSize: '1.2rem',
                marginLeft: '8px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              onClick={handleClick}
            >
              {clicked ? "Joining..." : "Join"}
            </Button>
          </h1>
        </div>
        <br />
        <h1> <b>Create Project</b></h1>
        <input value={newProjectID} onChange={(e) => setNewProjectID(e.target.value)} type="projectID" placeholder="Enter Project ID" id="projectID" name="projectID"></input>
        <input value={projectName} onChange={(e) => setProjectName(e.target.value)} type="projectName" placeholder="Enter Project Name" id="projectName" name="projectName"></input>
        <div className="button-container">
          <h1>
            <Button
              className="button"
              sx={{
                backgroundColor: 'lightgray',
                color: 'black',
                textTransform: 'none',
                borderRadius: '0',
                width: '100px',
                height: '50px',
                fontSize: '1.2rem',
                marginLeft: '8px',
                fontWeight: 'bold'
              }}
              onClick={handleClick}
            >
              {clicked ? "Creating..." : "Create"}
            </Button>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PromptProjects;