import { Routes, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
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
