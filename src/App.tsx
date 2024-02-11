import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App text-neutral-300">
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
      <div className="flex justify-center p-20">
        <div className="text-left grid flex">
          <h1 className="text-5xl">Skills</h1>
          <div className="artboard artboard-horizontal phone-6 p-20">
            <img src="/img/icons8-internet-48.png" className="w-10 my-5" />
            <h1 className="text-xl font-bold">Web Development</h1>
            <p className="flex">I have experience with full-stack development as an independent hobbyist, working on teams, and working on research projects. I have exprience with PHP, React.js, Node.js, MySQL, MongoDB, and all the standard front-end languages. Web development has been my programming mode of choice since middle school.</p>
          </div>
          <div className="artboard artboard-horizontal phone-6 p-20">
            <img src="/img/icons8-robot-50.png" className="w-10 my-5 " />
            <h1 className="text-xl font-bold">Machine Learning</h1>
            <p className="flex">I have a combined year of experience using both large langauge models and topic models in research projects at Virginia Tech related to code analysis and data modelling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
