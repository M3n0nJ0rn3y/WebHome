import { Routes, Route, Link } from "react-router-dom";
import { GET_EDUCATION, GET_PROJECTS, GET_EXPERIENCE, GET_INTERESTS } from "./pages"
import GET_FIRST_INTEREST from "./pages/Interests_subpage/First_Interest";
import {MyButton, SUB_BUTTON} from "./costums"
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
  { path: "/pages/Projects", label: "Projects", element: <GET_PROJECTS /> },
  { path: "/pages/Education", label: "Education", element: <GET_EDUCATION />},
  { path: "/pages/Experience", label: "Experience", element: <GET_EXPERIENCE /> },
  { path: "/pages/Interests", label: "Interests", element: <GET_INTERESTS /> ,
    subpages: [
      {path: "/pages/Interests_subpage/Sub_interests", label: "First Interest", element: <GET_FIRST_INTEREST />}
    ]
  }
  //Remember to import the functions before using them here.
]

function App() {
  return (
    <div className="App">
      <nav>
        {PAGES.map((page, page_num) => (
          <span key={page.path}>
            {page.subpages ? (
              <div className="dropdown"> 
                <MyButton to={page.path} label={page.label}/>
                
                <div className="dropdown-content"> 
                  {page.subpages.map((sub, sublink_num) => (
                    <SUB_BUTTON key={sublink_num} to={sub.path} label={sub.label} />
                  ))}
                </div>
                
              </div>
            ) : (
              <MyButton to={page.path} label={page.label}/>
            )}

            {page_num < PAGES.length - 1 && " | "}
          </span>
        ))}
      </nav>

      <Routes>
        {PAGES.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        {PAGES.filter(page => page.subpages).map((page) => 
          page.subpages!.map((sub) => (
            <Route key={sub.path} path={sub.path} element={sub.element} />
          ))
        )}
      </Routes>
    </div>
  );
}

export default App;
