import React, { useState } from "react";

export const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user name">user name</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}type="user name" placeholder="example_user_name" id="user name" name="user name" />
                <label htmlFor="user id">user id</label>
                <input value={userID} onChange={(e) => setUserName(e.target.value)}type="user id" placeholder="example_userid" id="user id" name="user id" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="login">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}