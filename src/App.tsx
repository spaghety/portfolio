import React from 'react';
import { Link } from 'react-scroll';
import './App.css';


class App extends React.Component {
  state = {
    loading: true
  };
  
  componentDidMount() {
    this.setState({loading: false});
  }

  render() {
    const {loading} = this.state;
    
    if (loading){
      return null;
    }

    return (
      <div className="App bg-zinc-900 text-neutral-300">
        <section id="top"> {/* HERO SECTION */}
          <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img src="img/pfp.jpg" className="max-w-sm rounded-lg shadow-2x1" alt="Me" />
              <div className="text-left lg:w-2/5">
                <h1 className="text-5xl font-bold">Phillip Jordan</h1>
                <p className="py-6">I'm a Virginia Tech student and cadet majoring in <span className="text-sky-400">Computer Science</span>, looking for a career in software engineering and development on a global scale.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="navbar-center bg-zinc-950 text-xs p-2 sticky top-0 z-50">
          <ul className="menu menu-horizontal p-0 border-solid border-2 rounded-full border-sky-400 p-0 bg-zinc-900">
            <li><Link activeClass="active" smooth spy to="top" className="rounded-full p-3 px-4 lg:px-8">Home</Link></li>
            <li><Link activeClass="active" smooth spy to="experience" className="rounded-full p-3 px-4 lg:px-8">Experience</Link></li>
            <li><Link activeClass="active" smooth spy to="skills" className="rounded-full p-3 px-4 lg:px-8">Skills</Link></li>
            <li><Link activeClass="active" smooth spy to="projects" className="rounded-full p-3 px-4 lg:px-8">Projects</Link></li>
          </ul>
        </div>
        <section id="experience">
          <div className="lg:p-20 p-10 text-left">
            <h1 className="text-5xl lg:m-10">Experience</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <i className="fa fa-check bg-sky-500"></i>
                </div>
                <div className="timeline-end m-10">
                  <div className="text-lg text-bold">Student</div>
                  <div className="text-md">Virginia Tech, 2022-present</div>
                  After graduating Durham Tech, I transferred to Virginia Tech in 2022 and then decided to enroll in their Corps of Cadets. I began in the Air Force ROTC program on a three-year track, taking both the first and second year classes simulatneously.<br />
                  During my first year at Virginia Tech, I dedicated a lot of time and effort to the Corps and Air Force while always keeping my academics as my highest priority.
                </div>
                <hr className="bg-sky-500" />
              </li>
              <li>
                <hr className="bg-sky-500" />
                <div className="timeline-start md:text-end m-10">
                  <div className="text-lg text-bold">Undergraduate Research Assistant</div>
                  <div className="text-md">Hume Center, August 2023-present</div>
                  I am working as an undergarduate research assistant with the Hume Center on a project exploring the application of LLMs to analyzing and detecting malware.<br />
                  On this project, I work mostly with prompt engineering native LLMs and reverse engineering C programs using python.
                </div>
                <div className="timeline-middle">
                  <i className="fa fa-check bg-sky-500"></i>
                </div>
                <hr className="bg-sky-500" />
              </li>
              <li>
                <hr className="bg-sky-500" />
                <div className="timeline-middle">
                  <i className="fa fa-check bg-sky-500"></i>
                </div>
                <div className="timeline-end m-10">
                  <div className="text-lg text-bold">Student Machine Learning Team Leader</div>
                  <div className="text-md">Virginia Tech Undergraduate Research CS, January 2024-present</div>
                  {"t"}I am working as the AI/ML team leader for a VTURCS research project with the objective of creating a diary study platform that allows administrators to analyze user entries with AI-powered topic modelling.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="skills"> {/* SKILLS SECTION */}
          <div className="lg:p-20 p-10 text-left">
            <h1 className="text-5xl lg:m-10">Skills</h1>
            <div className="card lg:mx-20 lg:p-20 lg:w-4/5">
              <img src="/img/icons8-internet-48.png" className="w-10 my-5" alt="web development" />
              <h1 className="text-xl font-bold">Web Development</h1>
              <p className="flex">I have experience with full-stack development as an independent hobbyist, working on teams, and working on research projects. I have exprience with PHP, React.js, Node.js, MySQL, MongoDB, and all the standard front-end languages. Web development has been my programming mode of choice since middle school.</p>
            </div>
            <div className="card lg:mx-20 lg:p-20 lg:w-4/5">
              <img src="/img/icons8-robot-50.png" className="w-10 my-5 " alt="machine learning" />
              <h1 className="text-xl font-bold">Machine Learning</h1>
              <p className="flex">I have a combined year of experience using both large langauge models and topic models in research projects at Virginia Tech related to code analysis and data modelling.</p>
            </div>
          </div>
        </section>
        <section id="projects"> {/* PROJECTS SECTION */}
          <div className="lg:p-20 text-left grid">
            <h1 className="text-5xl lg:m-10">Projects</h1>
            <div className="card lg:card-side lg:m-20 m-5 my-10 lg:w-4/5 bg-zinc-800 shadow-xl">
              <img className="h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/comma.png" alt="Comma Application" />
              <div className="card-body">
                <h2 className="card-title">Comma App</h2>
                <p>Comma is a women's health reminder app originally designed to help women track birth control. Originally made as a submission for Hackviolet Spring 2024 at Virginia Tech.</p>
                <a href="https://github.com/CommaHackViolet/commapp" className="btn rounded-full hover:bg-sky-400 hover:text-zinc-900 w-fit" target="_blank" rel="noreferrer">View on Github</a>
              </div>
            </div>
            <div className="card lg:card-side lg:m-20 m-5 my-10 lg:w-4/5 bg-zinc-800 shadow-xl">
              <img className="h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/vturcsds.png" alt="Diary Study Web App Wireframe" />
              <div className="card-body">
                <h2 className="card-title">VTURCS Diary Study Web App</h2>
                <p>I am working as the machine learning team lead on a research project at Virginia Tech focusing on analyzing diary studies and discussions using AI-powered topic modelling and data visualization.</p>
                <a href="https://github.com/wilhelmthegreat/diarystudyvt" className="btn rounded-full hover:bg-sky-400 hover:text-zinc-900 w-fit" target="_blank" rel="noreferrer">View on Github</a>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer footer-center p-10 bg-zinc-950 text-base-content rounded"> {/* FOOTER */}
          <nav>
            <div className="grid grid-flow-col gap-4 text-xl">
              <a href="https://linkedin.com/in/phillip-a-jordan" target="_blank" rel="noreferrer"><i className="fa fa-linkedin hover:text-sky-400"></i></a>
              <a href="https://github.com/spaghety" target="_blank" rel="noreferrer"><i className="fa fa-github hover:text-sky-400"></i></a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"><i className="ai ai-cv hover:text-sky-400"></i></a>
            </div>
            <div className="grid grid-flow-col gap-4 text-xl mt-2">
              <p className="text-sm">email: phillip.a.jordan@gmail.com</p>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
