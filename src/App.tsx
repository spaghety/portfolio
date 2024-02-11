import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="img/pfp.jpg" className="max-w-sm rounded-lg shadow-2x1" />
          <div className="text-left w-2/5">
            <h1 className="text-5xl font-bold">Phillip Jordan</h1>
            <p className="py-6">I'm a Virginia Tech student and cadet majoring in <span className="text-sky-400">Computer Science</span>, looking for a career in software engineering and development on a global scale.</p>
          </div>
        </div>
      </div>
      <div className="navbar-center bg-base-300 text-xs p-2">
          <ul className="menu menu-horizontal p-0 border-solid border-2 rounded-full border-sky-400 p-0 bg-base-200">
            <li><a className="rounded-full p-3 active px-8">Home</a></li>
            <li><a className="rounded-full p-3 px-8">Skills</a></li>
            <li><a className="rounded-full p-3 px-8">Projects</a></li>
          </ul>
      </div>
    </div>
  );
}

export default App;
