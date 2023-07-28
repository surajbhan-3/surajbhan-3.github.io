import React from 'react'
import "./styles/Project.css"
import missMinutes from "../assets/missminute.png"

function Project() {
  return (
    <React.Fragment>


        <section className='project-section' id='projects'>

                   <div className="projects-inside">
                                   <h1>Projects</h1>


                            <div className="project-main-div">

                                                           {/* **********project-1********** */}
                                          <div className="project-card">
                                               <div className="project-img"><img src={missMinutes}  alt="" /></div>
                                               <div className="project-title"> <strong>Miss Minutes</strong> </div>
                                               <div className="project-description">
                                                <p>Miss-Minutes is a desktop and mobile application where you can track you projects and their task. it is also a time tracking app for companies and freelancers</p>
                                               </div>
                                               <div className="project-techstack">
                                                   <strong>Techstack :-</strong> Node, JavaScript, Html, Css, Socket.io, Mongodb 
                                                
                                               </div>
                                               <div className="deployed">
                                                     <div className="frontend"><button>
                                                     <a  href="https://marvelous-sfogliatella-f816bc.netlify.app/#"target="_blank"  class="project-deployed-link">Live</a>
                                                      </button></div>
                                                     <div className="backend"><button>
                                                     <a  href="https://github.com/Kanwarpal-Singh/poised-slave-1674"target="_blank"class="project-github-link">
                                                      source code</a>
                                                      </button></div>
                                               </div>

                                                  
                                            </div>
                                            <div className="project-card">
                                               <div className="project-img"><img src={missMinutes} alt="" /></div>
                                               <div className="project-title"> Miss Minutes </div>

                                               <div className="project-description">
                                                <p>Miss-Minutes is a desktop and mobile application where you can track you projects and their task. it is also a time tracking app for companies and freelancers</p>
                                               </div>
                                               <div className="project-techstack">
                                                <button>HTML</button> <span> <button>Css</button> </span>
                                               </div>
                                               <div className="deployed">
                                                     <div className="frontend"><button>
                                                     <a  href="https://marvelous-sfogliatella-f816bc.netlify.app/#"target="_blank"  class="project-deployed-link">Live</a>
                                                      </button></div>
                                                     <div className="backend"><button>
                                                     <a  href="https://github.com/Kanwarpal-Singh/poised-slave-1674"target="_blank"class="project-github-link">
                                                      Source Code</a>
                                                      </button></div>
                                               </div>


                                              
                                            </div>
                                            <div className="project-card">
                                               <div className="project-img"><img src={missMinutes} alt="" /></div>
                                               <div className="project-title"> Miss Minutes </div>

                                               <div className="project-description">
                                                <p>Miss-Minutes is a desktop and mobile application where you can track you projects and their task. it is also a time tracking app for companies and freelancers</p>
                                               </div>
                                               <div className="project-techstack">
                                                <button>HTML</button> <span> <button>Css</button> </span>
                                               </div>
                                               <div className="deployed">
                                                     <div className="frontend"><button>
                                                     <a  href="https://marvelous-sfogliatella-f816bc.netlify.app/#"target="_blank"  class="project-deployed-link">Live</a>
                                                      </button></div>
                                                     <div className="backend"><button>
                                                     <a  href="https://github.com/Kanwarpal-Singh/poised-slave-1674"target="_blank"class="project-github-link">
                                                      Source code</a>
                                                      </button></div>
                                               </div>


                                              
                                            </div>
                                            <div className="project-card">
                                               <div className="project-img"><img src={missMinutes} alt="" /></div>
                                               <div className="project-title"> Miss Minutes </div>

                                               <div className="project-description">
                                                <p>Miss-Minutes is a desktop and mobile application where you can track you projects and their task. it is also a time tracking app for companies and freelancers</p>
                                               </div>
                                               <div className="project-techstack">
                                                <button>HTML</button> <span> <button>Css</button> </span>
                                               </div>
                                               <div className="deployed">
                                                     <div className="frontend"><button>
                                                     <a  href="https://marvelous-sfogliatella-f816bc.netlify.app/#"target="_blank"  class="project-deployed-link">Live</a>
                                                      </button></div>
                                                     <div className="backend"><button>
                                                     <a  href="https://github.com/Kanwarpal-Singh/poised-slave-1674"target="_blank"class="project-github-link">
                                                      source code</a>
                                                      </button></div>
                                               </div>


                                              
                                            </div>

                            </div>

                       </div>
        </section>

    </React.Fragment>
  )
}

export default Project