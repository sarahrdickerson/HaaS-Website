import React, {useEffect, useState} from "react";
import NavBarElements from "./navbarElements";

const Dashboard = () => { 
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("username"));
    }, []);

    return(
        <div>
            <NavBarElements/>
            <h1>Welcome, {userName}</h1>
        </div>
    )
}

export default Dashboard;