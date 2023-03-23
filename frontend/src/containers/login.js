import React, { useState } from "react";
import axios from '../api/axios.js';

export const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
        const btn = document.querySelector('.action-btn');
        btn.innerHTML = 'Logging in...';
        btn.setAttribute('disabled', true);
        axios.post(
            '/api/login',
            {
                username: userName,
                userid: userID,
                password: pass
            }
        ).then((response) => {
            if (response.data['success'] === true) {
                // hardcoded URL port since backend is running on port 8000, could run into response issues
                window.location.href = 'http://localhost:3000/dashboard';
            }
            else {
                if (response.data['message'] === 'Incorrect password') {
                    setErrorMessage('Incorrect password. Please try again.')
                }
                else if (response.data['message'] === 'Username does not exist') {
                    setErrorMessage('Invalid username or username does not exist. Please try again.')
                }
                else if (response.data['message'] === 'Incorrect User ID') {
                    setErrorMessage('Incorrect User ID. Please try again.')
                }
                btn.removeAttribute('disabled')
                btn.innerHTML = 'Log In'
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
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="user id">User ID</label>
                <input value={userID} onChange={(e) => setUserID(e.target.value)} type="user-id" placeholder="user id" id="user-id" name="user-id" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="action-btn" type="login" disabled={!validateForm()}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}