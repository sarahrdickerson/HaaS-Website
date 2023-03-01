import logo from './assets/logo_white.png';
import './App.css';
import {Login} from './containers/login.js';
import {Register} from './containers/register.js';
import React, {useState} from "react";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
      setCurrentForm(formName)
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
