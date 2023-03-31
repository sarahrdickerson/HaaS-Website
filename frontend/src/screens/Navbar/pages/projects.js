import React, { useState } from "react";
import "./projects.css";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import Inventory from "./inventory.js";
import axios from "../../../api/axios";

function PromptProjects() {
  const [clicked, setClicked] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const btn = document.querySelector(".create-button");
    btn.innerHTML = "Creating...";
    btn.setAttribute("disabled", true);
    axios
      .post("/api/createProject", {
        project_name: projectName,
        project_id: projectID,
      })
      .then((response) => {
        if (response.data["success"] === true) {
          setShowInventory(true);
        } else {
          if (response.data["message"] === "project id already exists") {
            setErrorMessage(
              "Project ID already exists. Please attempt with a different ID."
            );
          }
        }
      });
  };

  if (showInventory) {
    return <Inventory />;
  }

  return (
    <div className="projects-container-wrapper">
      <div className="projects-container">
        <h1>
          <b>Join Project</b>
        </h1>
        <TextField
          id="standard-basic"
          label="Enter Project ID"
          variant="standard"
          className="center-textfield"
        />
        <div className="button-container">
          <h1>
            <Button
              className="button"
              sx={{
                backgroundColor: "lightgray",
                color: "black",
                textTransform: "none",
                borderRadius: "0",
                width: "100px",
                height: "50px",
                fontSize: "1.2rem",
                marginLeft: "8px",
                fontWeight: "bold",
                textAlign: "center",
              }}
              onClick={() => setClicked(true)}
            >
              {clicked ? "Joining..." : "Join"}
            </Button>
          </h1>
        </div>
        <br />
        <h1>
          <b>Create Project</b>
        </h1>
        <TextField
          id="standard-basic"
          label="Enter Project ID"
          variant="standard"
          className="center-textfield"
          onChange={(event) => setProjectID(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Enter Project Name"
          variant="standard"
          className="center-textfield"
          onChange={(event) => setProjectName(event.target.value)}
        />
        <div className="button-container">
          <h1>
            <Button
              className="create-button"
              sx={{
                backgroundColor: "lightgray",
                color: "black",
                textTransform: "none",
                borderRadius: "0",
                width: "100px",
                height: "50px",
                fontSize: "1.2rem",
                marginLeft: "8px",
                fontWeight: "bold",
              }}
              onClick={handleClick}
            >
              Create
            </Button>
          </h1>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default PromptProjects;
