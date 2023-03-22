import './App.css';
// import React, {useEffect, useState} from "react";
import React from 'react';
import Entry from './screens/entry';
import Dashboard from './screens/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
