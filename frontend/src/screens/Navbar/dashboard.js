import React from "react";
// import axios from '../api/axios.js';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements'
import logo from '../../assets/logo_white.png';

const Dashboard = () => { 
    // var currentUser = ""   
    return(
        <><div>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/dashboard' activeStyle>
                        <img src={logo} className="dashboard-logo" alt="logo" />
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/settings' activeStyle>
                        Settings
                    </NavLink>
                </NavMenu>
            </Nav>
        </div><div>
                <h1 align='center'>
                    Hello 
                </h1>
            </div></>
    )
}

export default Dashboard;