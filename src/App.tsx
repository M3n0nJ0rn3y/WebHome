import { Routes, Route, Link } from "react-router-dom";
import Get_Education from "./subpages/Education";
import Get_Projects from "./subpages/Projects";
import Get_Experience from "./subpages/Experience";
import Get_Interests from "./subpages/Interests";
import MyButton from "./costums/myButton";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import path from "path";

const PAGES = [
  // This is very ugly.
  { path: "/", label: "Home", element: ( 
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
      <p>
        Does this update live on the homeapp container
      </p>
  </header>)},
  { path: "/subpages/Projects", label: "Projects", element: <Get_Projects /> },
  { path: "/subpages/Education", label: "Education", element: <Get_Education />},
  { path: "/subpages/Experience", label: "Experience", element: <Get_Experience /> },
  { path: "/subpages/Interests", label: "Interests", element: <Get_Interests /> }
  //Remember to import the functions before using them here.
]

function App() {
  return (
    <div className="App">
      <nav>
        {PAGES.map((page, i) => (
          <span key={page.path}>
            <MyButton to={page.path} label={page.label}/>
            {i < PAGES.length - 1 && " | "}
          </span>
        ))}
      </nav>

      <Routes>
        {PAGES.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
