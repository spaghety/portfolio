import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="img/pfp.jpg" className="max-w-sm rounded-lg shadow-2x1" />
          <div className="text-left w-2/5">
            <h1 className="text-5xl font-bold">Phillip Jordan</h1>
            <p className="py-6">I'm a Virginia Tech student and cadet majoring in <span className="text-sky-400">computer science</span>, looking for a career in software engineering and development on a global scale.</p>
            <p className="py-10">Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="navbar bg-base-300 text-xs">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Phillip</a>
        </div>
        <div className="navbar-center hidden lg:flex border-solid border-2 rounded-full border-sky-400 p-0 bg-base-200">
          <ul className="menu menu-horizontal p-0">
            <li><a className="rounded-full p-3 active"><img src="/img/home.png" className="w-5" /></a></li>
            <li><a className="rounded-full p-3">Drones</a></li>
            <li><a className="rounded-full p-3">Contact me</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
