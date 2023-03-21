import logo from './assets/logo_white.png';
import './App.css';
import {Login} from './containers/login.js';
import {Register} from './containers/register.js';
import React, {useEffect, useState} from "react";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
      setCurrentForm(formName)
  }

  useEffect(() => {
    document.title = currentForm === 'login' ? 'Team Sprinters | Login' : 'Team Sprinters | Register';
  }, [currentForm]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Login Here!</h1>
      </header> */}
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
