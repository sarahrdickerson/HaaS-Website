import React from "react";
import './CheckInCheckOut.css';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function CheckInCheckOut(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="hw-set">
                    <h3 id="hw-set-1">HWSet1: {props.HWSet1}</h3>
                </div>
                <TextField className="textfield" id="outlined-basic" label="Enter qty" variant="outlined" style={{ borderColor: 'black', marginRight: '5px', marginLeft: '-8px'}} sx={{ '& fieldset': { borderWidth: '2px' } }} />
                <Button className="button" sx={{ backgroundColor: 'lightgray', color: 'black', textTransform: 'none', borderRadius: '0' }}>Check In</Button>
                <Button className="button" sx={{ backgroundColor: 'lightgray', color: 'black', marginLeft: '5px', textTransform: 'none', borderRadius: '0' }}>Check Out</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <div className="hw-set">
                    <h3 id="hw-set-2">HWSet2: {props.HWSet2}</h3>
                </div>
                <TextField className="textfield" id="outlined-basic" label="Enter qty" variant="outlined" style={{ borderColor: 'black', marginRight: '5px', marginLeft: '-8px' }} sx={{ '& fieldset': { borderWidth: '2px' } }} />
                <Button className="button" sx={{ backgroundColor: 'lightgray', color: 'black', textTransform: 'none', borderRadius: '0' }}>Check In</Button>
                <Button className="button" sx={{ backgroundColor: 'lightgray', color: 'black', marginLeft: '5px', textTransform: 'none', borderRadius: '0' }}>Check Out</Button>
            </div>
        </div>
    );
}

export default CheckInCheckOut;
