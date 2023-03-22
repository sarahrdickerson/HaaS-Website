import React, { useState } from "react";
// import { redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from '../api/axios.js';

export const Register = (props) => {
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
        const btn = document.querySelector('.action-btn');
        btn.innerHTML = 'Registering...';
        btn.setAttribute('disabled', true);
        axios.post(
            '/api/submit_new_user',
            {
                username: userName,
                userid: userID,
                password: pass,
            }
        ).then((response) => {
            if(response.data['success'] === true) {
                window.location.href = '/dashboard';
            } else if (response.data['message'] === 'Username already exists') {
                alert('User already exists');
                window.location.href = '/';
            } else {
                alert('Something went wrong');
                window.location.href = '/';
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    function validateForm() {
        return userName.length > 0 && userID.length > 0 && pass.length > 0
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="user-id">User ID</label>
                <input value={userID} onChange={(e) => setUserID(e.target.value)}type="user-id" placeholder="user id" id="user-id" name="user-id" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="action-btn" type="create-account" disabled={!validateForm()} >Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}