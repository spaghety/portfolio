import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App text-neutral-300">
      <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="img/pfp.jpg" className="max-w-sm rounded-lg shadow-2x1" alt="Me" />
          <div className="text-left w-2/5">
            <h1 className="text-5xl font-bold">Phillip Jordan</h1>
            <p className="py-6">I'm a Virginia Tech student and cadet majoring in <span className="text-sky-400">Computer Science</span>, looking for a career in software engineering and development on a global scale.</p>
          </div>
        </div>
      </div>
      <div className="navbar-center bg-base-300 text-xs p-2">
        <ul className="menu menu-horizontal p-0 border-solid border-2 rounded-full border-sky-400 p-0 bg-base-200">
          <li><a href="https://google.com" className="rounded-full p-3 active px-8">Home</a></li>
          <li><a href="https://google.com" className="rounded-full p-3 px-8">Skills</a></li>
          <li><a href="https://google.com" className="rounded-full p-3 px-8">Projects</a></li>
        </ul>
      </div>
      <div className="p-20 text-left">
        <h1 className="text-5xl m-10">Skills</h1>
        <div className="card mx-20 p-20 py-10 w-4/5">
          <img src="/img/icons8-internet-48.png" className="w-10 my-5" alt="web development" />
          <h1 className="text-xl font-bold">Web Development</h1>
          <p className="flex">I have experience with full-stack development as an independent hobbyist, working on teams, and working on research projects. I have exprience with PHP, React.js, Node.js, MySQL, MongoDB, and all the standard front-end languages. Web development has been my programming mode of choice since middle school.</p>
        </div>
        <div className="card mx-20 px-20 w-4/5">
          <img src="/img/icons8-robot-50.png" className="w-10 my-5 " alt="machine learning" />
          <h1 className="text-xl font-bold">Machine Learning</h1>
          <p className="flex">I have a combined year of experience using both large langauge models and topic models in research projects at Virginia Tech related to code analysis and data modelling.</p>
        </div>
      </div>
      <div className="p-20 text-left grid">
        <h1 className="text-5xl m-20">Projects</h1>
        <div className="card card-side m-20 w-4/5 bg-base-200 shadow-xl">
          <img className="h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/comma.png" />
          <div className="card-body">
            <h2 className="card-title">Comma App</h2>
            <p>Comma is a women's health reminder app originally designed to help women track birth control. Originally made as a submission for Hackviolet Spring 2024 at Virginia Tech.</p>
          </div>
        </div>
        <div className="card card-side m-20 w-4/5 bg-base-200 shadow-xl">
          <img className="h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/vturcsds.png" />
          <div className="card-body">
            <h2 className="card-title">VTURCS Diary Study Web App</h2>
            <p>Web app developed as part of a research project at Virginia tech for a diary study and discussion platform that gives professors and researchers AI-powered tools for modelling user entries.</p>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
