import React, { useState } from "react";
import AuthorizedUsers from "./AuthorizedUsers";
import CheckInCheckOut from "./CheckInCheckOut";
import './IndividualProject.css';
import { Button } from "@mui/material";

function IndividualProject(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const containerClass = clicked ? "project-container-clicked" : "project-container";

    return (
        <div className={containerClass}>
            <div className="project-name">
                <h3> Project Name {props.number}</h3>
            </div>
            <div>
                <AuthorizedUsers />
            </div>
            <div>
                <CheckInCheckOut HWSet1={props.HWSet1} HWSet2={props.HWSet2} />
            </div>
            <div>
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
                    {clicked ? "Leave" : "Join"}
                </Button>
            </div>
        </div>
    );
}

export default IndividualProject;
