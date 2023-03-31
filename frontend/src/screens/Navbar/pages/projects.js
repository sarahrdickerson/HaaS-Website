import React, { useState } from "react";
import './projects.css';
import TextField from '@material-ui/core/TextField'
import Button from '@mui/material/Button';
import Inventory from './inventory.js';

function PromptProjects() {
  const [clicked, setClicked] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

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
        <TextField id="standard-basic" label="Enter Project ID" variant="standard" className="center-textfield" />
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
        <TextField id="standard-basic" label="Enter Project ID" variant="standard" className="center-textfield" />
        <TextField id="standard-basic" label="Enter Project Name" variant="standard" className="center-textfield" />
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