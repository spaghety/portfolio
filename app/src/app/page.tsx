import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
      <div className="App bg-zinc-900 text-neutral-300">
        <div id="top"> {/* HERO SECTION */}
          <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/img/pfp.jpg" className="lg:max-w-sm max-w-64 rounded-lg shadow-2x1" alt="Me" />
              <div className="text-left lg:w-2/5">
                <h1 className="lg:text-5xl text-4xl font-bold">Phillip Jordan</h1>
                <p className="py-6">I'm a Navy civilian employee maintaining a partially classified codebase for acoustic simulations used in submarine and surface trainers written primarily in C++, looking for new opportunities to use my security clearance and improve my technical skills.</p>
                <Link href="#top" className="btn rounded-full px-5 bg-transparent text-sky-400 border-sky-400 hover:border-sky-400 hover:bg-sky-400 hover:text-zinc-900">
                Links
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center bg-zinc-950 text-xs p-2 sticky top-0 z-50">
          <ul className="menu menu-horizontal p-0 border-solid border-2 rounded-full border-sky-400 p-0 bg-zinc-900">
            <li><Link activeclass="active" href="top" className="rounded-full p-3 px-4 lg:px-8">Home</Link></li>
            <li><Link activeclass="active" href="experience" className="rounded-full p-3 px-4 lg:px-8">Experience</Link></li>
            <li><Link activeclass="active" href="skills" className="rounded-full p-3 px-4 lg:px-8">Skills</Link></li>
            <li><Link activeclass="active" href="projects" className="rounded-full p-3 px-4 lg:px-8">Projects</Link></li>
          </ul>
        </div>
        <div id="experience"> {/* EXPERIENCE SECTION */}
          <div className="p-5 lg:p-10 text-left">
            <h1 className="text-4xl lg:text-5xl my-5 lg:m-10">Experience</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <i className="fa fa-check bg-sky-500"></i>
                </div>
                <div className="timeline-end m-10">
                  <div className="text-lg text-bold">Computer Science Student</div>
                  <div className="text-md">Virginia Tech, 2022-2024</div>
                  After graduating Durham Tech, I transferred to Virginia Tech in 2022 and decided to enroll in their Corps of Cadets, initially with the Air Force but then later as a civilian.<br />
                  During my time at Virginia Tech and in the corps, I gained an interest in applications of software tools to national security and defense.
                </div>
                <hr className="bg-sky-500" />
              </li>
              <li>
                <hr className="bg-sky-500" />
                <div className="timeline-start md:text-end mx-10">
                  <div className="text-lg text-bold">Undergraduate Research Assistant</div>
                  <div className="text-md">VTNSI Analyzing Malware with LLMs Project, August 2023-May 2024</div>
                  I am working as an undergarduate research assistant with the Virginia Tech National Security Institute on a project exploring the application of LLMs to analyzing and detecting malware.<br />
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
                <div className="timeline-end mx-10">
                  <div className="text-lg text-bold">Student Machine Learning Team Leader</div>
                  <div className="text-md">VTURCS AI-Powered Diary Study Tool Project, January 2024-May 2024</div>
                  {"t"}I worked as the AI/ML team leader for a VTURCS research project with the objective of creating a diary study platform that allows administrators to analyze user entries with AI-powered topic modelling.
                </div>
                <hr className="bg-sky-500" />
              </li>
              <li>
                <hr className="bg-sky-500" />
                <div className="timeline-middle">
                    <i className="fa fa-check bg-sky-500"></i>
                </div>
                    <div className="timeline-start md:text-end mx-10">
                        <div className="text-lg text-bold">Student Researcher</div>
                        <div className="text-md">VTURCS Appalachian Trail Mobile Software Project, June 2024-July 2024</div>
                        I worked on a summer research project focused on developing a mobile app to help hikers on the Appalachian Trail journal and track their progress and fill out social research surveys for rewards.
                    </div>
                    <hr className="bg-sky-500" />
                </li>
                <li>
                    <hr className="bg-sky-500" />
                    <div className="timeline-middle">
                        <i className="fa fa-check bg-sky-500"></i>
                    </div>
                    <div className="timeline-end mx-10">
                        <div className="text-lg text-bold">ND-2 Software Developer</div>
                            <div className="text-md">Naval Surface Warfare Center, Carderock Division, January 2025-present</div>
                            I'm currently working as a Navy civilian maintaining the acoustic modelling software used in submarine and surface trainers. In this position, I've developed my skills in analyzing and documenting legacy code in a partially classified codebase.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="skills"> {/* SKILLS SECTION */}
            <div className="p-5 lg:p-10 text-left">
                <h1 className="text-4xl lg:text-5xl my-5 lg:m-10">Skills</h1>
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <img src="/img/icons8-internet-48.png" className="w-10 my-5" alt="web development" />
                        <h1 className="text-xl font-bold">Web Development</h1>
                        <p className="flex">I have front-end development experience as a hobbyist and from working on small teams at in college and in my career.</p>
                    </div>
                    <div>
                        <img src="/img/icons8-robot-50.png" className="w-10 my-5 " alt="machine learning" />
                        <h1 className="text-xl font-bold">Machine Learning</h1>
                        <p className="flex">I have some experience using both LLMs and smaller topic models in research projects at Virginia Tech related to code analysis and data modelling.</p>
                    </div>
                    <div>
                        <img src="/img/icons8-rocket-50.png" className="w-10 my-5" alt="defense" />
                        <h1 className="text-xl font-bold">Defense</h1>
                        <p className="flex">I have experience from Virginia Tech and as a DoD employee with coding in a sensitive industry with high standards for security.</p>
                    </div>
                    <div>
                        <img src="/img/icons8-docker-50.png" className="w-10 my-5" alt="defense" />
                        <h1 className="text-xl font-bold">Containers</h1>
                        <p className="flex">I regularly use containers in my hobbyist projects and in my career with docker, podman, and kubernetes to improve reliability and modularity.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="projects"> {/* PROJECTS SECTION */}
          <div className="p-5 lg:p-10 text-left grid">
            <h1 className="text-4xl lg:text-5xl my-5 lg:m-10">Projects</h1>
            <div className="card lg:card-side my-10 mx-5 lg:w-4/5 bg-zinc-800 shadow-xl">
              <img className="object-cover h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/vturcsds.png" alt="Diary Study Web App Wireframe" title="Figma screenshot" />
              <div className="card-body">
                <h2 className="card-title">VTURCS Diary Study Web App</h2>
                <p>
                  I worked as the machine learning team lead on a research project at Virginia Tech focusing on analyzing diary studies and discussions using AI-powered topic modelling and data visualization.
                  </p>
                  <p>
                In this project, I created python scripts to analyze sentiment, extract significant sentences, and analyze discussion posts using nltk, sklearn, and transformers.</p>
                <a href="https://github.com/wilhelmthegreat/diarystudyvt" className="btn rounded-full hover:bg-sky-400 hover:text-zinc-900 w-fit" target="_blank" rel="noreferrer">View on Github <i className="fa fa-external-link"></i></a>
              </div>
            </div>
            <div className="card lg:card-side my-10 mx-5 lg:w-4/5 bg-zinc-800 shadow-xl">
              <img className="object-cover h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/mwpapersc.png" alt="Research Presentation Powerpoint Screenshot" title="Presentation Slide" />
              <div className="card-body">
                <h2 className="card-title">Analyzing Malware with LLMs</h2>
                <p className="font-medium">
                  Authors: Phillip Jordan, Mark Thompson, Jared Gregersen<br/>
                  <i>Presented in Academic Symposium on Cybersecurity, Emerging Networks, and Technologies (ASCENT), 2024</i><br/>
                  </p>
                  <p className="text-s">
                  I was the sole student researcher on a project with the Virginia Tech National Security Institute (VTNSI) on how LLMs can be used to reverse engineer potentially malicious executables by analyzing disassembled machine code and presented my findings to members of the military and intelligence community.
                </p>
                <a href="/pdf/mwpaper.pdf" className="btn rounded-full hover:bg-sky-400 hover:text-zinc-900 w-fit" target="_blank" rel="noreferrer">
                PDF Report <i className="fa fa-file"></i>
                </a>
              </div>
            </div>
            <div className="card lg:card-side my-10 mx-5 lg:w-4/5 bg-zinc-800 shadow-xl">
              <img className="object-cover h-80 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src="/img/demos/comma.png" alt="Comma Application" title="Screenshot of landing page" />
              <div className="card-body">
                <h2 className="card-title">Comma App</h2>
                <p>Comma is a women's health reminder app originally designed to help women track birth control. Originally made as a submission for Hackviolet Spring 2024 at Virginia Tech.</p>
                <a href="https://github.com/CommaHackViolet/commapp" className="btn rounded-full hover:bg-sky-400 hover:text-zinc-900 w-fit" target="_blank" rel="noreferrer">View on Github <i className="fa fa-external-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <footer className="footer footer-center p-10 bg-zinc-950 text-base-content rounded"> {/* FOOTER */}
            <nav>
              <div className="grid grid-flow-col gap-5 text-2xl">
                <a href="https://linkedin.com/in/phillip-a-jordan" target="_blank" rel="noreferrer"><i className="fa fa-linkedin hover:text-sky-400"></i></a>
                <a href="https://github.com/spaghety" target="_blank" rel="noreferrer"><i className="fa fa-github hover:text-sky-400"></i></a>
                <a href="/pdf/resume.pdf" target="_blank" rel="noreferrer"><i className="ai ai-cv hover:text-sky-400"></i></a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    );
}
