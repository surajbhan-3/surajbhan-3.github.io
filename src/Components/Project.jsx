import React from 'react'
import { useState } from 'react';
import "./styles/Project.css"
// import missMinutes from "../assets/missminute.png"
// import netflixImage from "../assets/netflix-clone.png"
function Project() {
  const [displayCategory, setDisplayCategory] = useState('all');
 
  const handleCategoryClick = (category) => {
    setDisplayCategory(category);
  };

  const projectData = [
    {
      id:1,
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGdYtGUCXoFTIzebVNKyiCIcWUrqBKPPLQWCtp04YlDn7xUb737jBGB-2oGeXMnuCgBysYLHyJka0gUyFG26ZGWeg83loAyFhiyWaQfCEDYrNKUXz3e1Zw-Td5JPVKPgjAMoA6f6IiR7Mkw5scgNCvQ4yivChpaUkKPrA3bK-jal9WHKZ6TotPkxpx_pQ/s320/missminute.png",
      category: 'node',
      title: 'Miss Minutes',
      description: 'Miss Minutes is the ultimate productivity companion, empowering individuals and teams to unlock their full potential. With its powerful time tracking, insightful analytics, and intelligent activity monitoring.',
      techStack: 'MongoDB, Express.js, React.js, Node.js',
      frontendLink: 'https://example-mern-project1.com',
      backendLink: 'https://example-mern-project1-api.com',
    },
    { id:2,
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinu2fJRI0Th3rBWTtMTNZ2PGQOmVHneKbd9hxcXH5sk0aPnDr8GCucNtWhC7GKDxxImKDsVMlQt8waQUAskiKCEfeEpOAY54LxXTM78zJBXvQBVHGW-Wkkv4HF31RXOhLKfzG7Y1IJ05vSDqpOFktX6DVNHvAsyKJiCNG033TnjrQINYDI2PpxYdQfR9c/s320/netflix-clone.png",
      category: 'react',
      title: 'Netflix-clone',
      description: 'I have created a captivating landing page inspired by Netflix, The page dynamically fetches data from the TMdb Movies API, allowing for real-time updates and a dynamic user experience. Leveraging the fundamental concepts of React.js.',
      techStack: 'React,React-icons,vercel',
      frontendLink: 'https://netflix-clone-surajbhan.vercel.app/',
      backendLink: 'https://example-mern-project1-api.com'
    },
    { 
      id:3,
      category: 'node',
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMtccmXqoIu8bIO3ajXFXanEiKj5Dkehl_6RF1RNpRNJwtBxXAe01QHTLQd-ycAoi4dEcq1kgA7qRPX8RZEui8qNwofMQ9UIb18OiPiLkOzO2jeskdgtBi4zNp1c2ZYjT9v4Uzq-Iej2QKisJ5i7kZVFGZ4cbBZaBdwZp39flktDGAwcAdnHMyIMnGtLc/s320/designdecor.png",
      title: 'Design&Decor',
      description: 'I have developed a dynamic e-commerce project using MongoDB for backend operations and RESTful APIs. The project features powerful search, sorting, and filtering functionalities, enhancing user experience.',
      techStack: 'Node, Mongodb, JavaScript, HTML, CSS',
      frontendLink: 'https://marvelous-sfogliatella-f816bc.netlify.app/',
      backendLink: 'https://github.com/surajbhan-3/crazy-teaching-3595',
    },
    { 
      id:4,
      category: 'js',
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxI2Yc27cKELP3E9aBgEQm5Pt64xaTuPoHSJ20o1Hbutwi7p55Baug3COZ6toLYqYFhfCBySroVzrNXY2nxfz-yuw0qaxelig43o5U2YIYlCJ87dHBNI3i4EIA3hkP3IPj_VuB8QEJN8HVG80tkDV_4ank1Z2g4sAArHS2P2KUWtMRM2lfUmLLvi8c8Us/s320/home.png",
      title: 'Startups',
      description: 'The "Visualization of Indian Startups Data" project is a graphical representation of various startups in India, showcasing their key information and products using the popular charting library, Chart.js.',
      techStack: 'Chart.js, JavaScript, HTML, CSS',
      frontendLink: 'https://tangerine-capybara-531640.netlify.app/',
      backendLink: 'https://github.com/surajbhan-3/IndianStartups'
    },
    { 
      id:5,
      category: 'js',
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZK2TBe7Fclj6-bIPAOIc_1NT0em074BNgEAtM7qPHbnupRWVKchphyetdV5vaP9ODq-qPUnj45uT7VN57XAoGvdX70gNomtfA3ycoO_FdrEd_L1vxtA1CnTUTNXccnF9jCD5AX3s_y-GwgvTB-7PRm6D7Uxha7o0_xQElb8SeWpfStvqzP4wpBKaAkdM/s320/homedecor.png",
      title: 'Crate and Barrel-clone',
      description: 'Crate and Barrel Holdings, that sells modern furniture, housewares, and decor. With over 100 stores exclusive designs, and seamless shopping solutions through digital design and visualization tools.',
      techStack: 'JavaScript, HTML, CSS',
      frontendLink: 'https://resplendent-dieffenbachia-5cbb43.netlify.app/',
      backendLink: 'https://github.com/8309h/eminent-trucks-727'
    },
    
    // Add more project cards here as needed
  ];
  const filteredProjects = displayCategory === 'all' ? projectData : projectData.filter((project) => project.category === displayCategory);


  return (
    <React.Fragment>


        <section className='project-section' id='projects'>

                   <div className="projects-inside inside">
                                   <h1>Projects</h1>
                                  <div className='project-type categories'>
                                     <div id='project-type1' className={displayCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryClick('all')}>&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                     <div id='project-type2' className={displayCategory === 'mern' ? 'active' : ''} onClick={() => handleCategoryClick('mern')}>MERN</div>
                                     <div id='project-type3' className={displayCategory === 'react' ? 'active' : ''} onClick={() => handleCategoryClick('react')}>React</div>
                                     <div id='project-type4' className={displayCategory === 'node' ? 'active' : ''} onClick={() => handleCategoryClick('node')}>Node</div>
                                     <div id='project-type5' className={displayCategory === 'js' ? 'active' : ''} onClick={() => handleCategoryClick('js')}>JS</div>
                                 </div>
                                      
                   


     
                            <div className="project-main-div">

                                                           {/* **********project-1********** */}
                                 {/* Project Cards */}
                                      {filteredProjects.map((project) => (
                                        <div key={project.id} className={`project-card ${project.category}`}>
                                          <div className="project-img">
                                            <img src={project.image} alt={project.title} />
                                          </div>
                                          <div className="project-title">
                                            <strong>{project.title}</strong>
                                          </div>
                                          <div className="project-description">
                                            <p>{project.description}</p>
                                          </div>
                                          <div className="project-techstack">
                                            <strong>Techstack:</strong>{project.techStack}
                                          </div>
                                          <div className="deployed">
                                            <div className="frontend">
                                              <button>
                                                <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-deployed-link">
                                                  Frontend
                                                </a>
                                              </button>
                                            </div>
                                            {project.backendLink && (
                                              <div className="backend-project">
                                                <button>
                                                  <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-github-link">
                                                    Backend
                                                  </a>
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      ))}

                            </div>

                      </div>

     
        </section>

    </React.Fragment>
  )
}

export default Project