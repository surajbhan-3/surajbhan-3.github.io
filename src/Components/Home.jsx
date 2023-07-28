import React from 'react'
import "./styles/Home.css"
import profilePicture from  "../assets/surajbhan.jpg"
import Resume from "../assets/Suraj-Bhan-Singh-Resume.pdf"  

import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaQuora} from "react-icons/fa";
import {HiMail} from "react-icons/hi"
import {HiArrowDownCircle} from "react-icons/hi2";

function openDrive() {
  window.open(
      "https://drive.google.com/file/d/1BbBp0dkaFIUSmR-HUUaGasa3KRr_YMli/view?usp=sharing"
  );
  }
  


function Home() {
  return (
    <React.Fragment>
                  <section className='home-section' id='home'>

                           <div className="home-div">

                           <div className="home-imgee">
                                <div>
                                <img  src={profilePicture} className='home-img' alt="suraj-bhan-singh" />
                                </div>
                                
                              </div>
                              
                              <div className="home-details">
                                <h1>Welcome to my Portfolio ! 🙋 </h1>
                                    <p >Hii I am <strong id='user-detail-name'> Suraj Bhan Singh </strong> Full Stack Web Developer. 
                                    As a Full Stack Web Developer, I am eager to learn and committed to harnessing my passion and dedication to create innovative and user-centric solutions that make a positive impact in the digital world.
                                    
                                    </p>

                                   
                                    <li  id='resume-button-2'><a id='resume-link-2' href={Resume} target="_blank" rel="noopener noreferrer" className='googleDrive resume-icon' onClick={openDrive} download="Suraj-Bhan-Singh-Resume"> <span>Resume </span><HiArrowDownCircle  size={30} /> </a></li>


                                   <h2>Connect with me :-</h2>
                                   <div className="social-media">
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><FaGithub size={30} />   </a> </button>
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30}/></a> </button>
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter size={30}  /> </a> </button>
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /> </a> </button>
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><FaQuora size={30}  />   </a> </button>
                                         <button><a href="http://" target="_blank" rel="noopener noreferrer"><HiMail size={30}  />    </a></button>
                                     
                                   </div>
                                  
                              </div>
                              
                                   
                           </div>

                  </section>
                    
    </React.Fragment>
  )
}

export default Home