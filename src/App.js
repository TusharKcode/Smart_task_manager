import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import CreateTask from "./components/CreateTask";
import Settings from "./components/Settings";
import './App.css';

function App() {
  return (
    <Router>

        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;
