import React from "react";
import './Projects.css';
import IndividualProject from './IndividualProject';

function Projects() {
    return (
        <div className="projects-container-wrapper">
            <div className="projects-container">
                <h1> <b>Projects</b></h1>
                <IndividualProject number="1" HWSet1="50/100" HWSet2="0/100" />
                <IndividualProject number="2" HWSet1="50/100" HWSet2="0/100" />
                <IndividualProject number="3" HWSet1="0/100" HWSet2="0/100" />
            </div>
        </div>
    );
}

export default Projects