import NavBarElements from '../navbarElements';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const Settings = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setUserId(localStorage.getItem("userId"));
  }, [localStorage.getItem("username"), localStorage.getItem("userId")]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setUserName("");
    setUserId("");
  }

  return (
    <div>
      <NavBarElements />
      <div className='settings-container'>
        <h1 align="center" >Profile</h1>
        <p align="center" >Username: {userName}</p>
        <p align="center" >User ID: {userId}</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
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
          onClick={handleLogout}
        >
          Logout
        </Button>
        </Link> 
      </div>
    </div>
  );
}

export default Settings;
