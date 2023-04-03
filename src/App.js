import './App.css';
// import React, {useEffect, useState} from "react";
import React from 'react';
import Entry from './screens/entry';
import Dashboard from './screens/Navbar/dashboard';
import DashboardProjects from './screens/Navbar/pages/projectsPage'
import DashboardSettings from './screens/Navbar/pages/settings'
import Invetory from './screens/Navbar/pages/inventoryPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<DashboardProjects />} />
        <Route path="/settings" element={<DashboardSettings />} />
        <Route path="/inventory" element={<Invetory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
