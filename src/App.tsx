import { Routes, Route, Link } from "react-router-dom";
import Get_Education from "./subpages/Education";
import Get_Projects from "./subpages/Projects";
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/subpages/Projects">Projects</Link> |{" "}
        <Link to="/subpages/Education">Education</Link>
      </nav>
      <Routes>
        <Route path="/subpages/Projects" element={<Get_Projects />} />
        <Route path="/subpages/Education" element={<Get_Education />} />
        <Route path="/" element={
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Does this update live on the homeapp container
            </p>
          </header>
        } />
      </Routes>
    </div>
  );
}

export default App;
