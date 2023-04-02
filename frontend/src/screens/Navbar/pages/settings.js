import NavBarElements from '../navbarElements';
import React, {useEffect, useState} from "react";


const Settings = () => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("username"));
        setUserId(localStorage.getItem("userId"));
    }, []);

    return (
        <div>
          <NavBarElements/>  
          <h1>
            Profile
          </h1>
          <p>Username: {userName}</p>
          <p>User ID: {userId}</p>
        </div>
    
    )
}

export default Settings