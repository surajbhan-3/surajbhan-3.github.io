import React from 'react'
import "./styles/Home.css"
import profilePicture from  "../assets/surajbhan.jpg"
import Resume from "../assets/Suraj-Bhan-Singh-Resume.pdf";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaQuora} from "react-icons/fa";
import {HiMail} from "react-icons/hi"
import {HiArrowDownCircle} from "react-icons/hi2";
import { motion } from 'framer-motion';

function openDrive() {
  window.open(
      "https://drive.google.com/file/d/1BbBp0dkaFIUSmR-HUUaGasa3KRr_YMli/view?usp=sharing"
  );
  }
  


function Home() {
  return (
    <React.Fragment>
                  <section className='home-section' id='home'>

                           <motion.div  className="home-div inside">

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

                                   
                                    <li  id='resume-button-2'><a id='resume-link-2' href={Resume} target="_blank" rel="noopener noreferrer" className='googleDrive resume-icon' onClick={openDrive} download="Suraj-Bhan-Singh-Resume"> <span>Resume </span><HiArrowDownCircle className='r-icon' size={30} /> </a></li>


                                   <h2>Connect with me :-</h2>
                                   <div className="social-media">
                                         <button><a href="https://github.com/surajbhan-3" target="_blank" rel="noopener noreferrer"><FaGithub  size={30} />   </a> </button>
                                         <button><a href="https://www.linkedin.com/in/surajbhan-singh/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color='blue' size={30}/></a> </button>
                                         <button><a href="https://twitter.com/nobodyknws3" target="_blank" rel="noopener noreferrer"><FaTwitter color='darkturquoise' size={30}  /> </a> </button>
                                         <button><a href="https://wa.me/8920213684" target="_blank" rel="noopener noreferrer"><FaWhatsapp color='limegreen' size={30} /> </a> </button>
                                         <button><a href="https://www.quora.com/profile/Suraj-Bhan-Singh-24" target="_blank" rel="noopener noreferrer"><FaQuora color='brown' size={30}  />   </a> </button>
                                         <button><a href="mailto:surajbhan2boaz@gmail.com" target="_blank" rel="noopener noreferrer"><HiMail color='orangered' size={30}  />    </a></button>
                                     
                                   </div>
                                  
                              </div>
                              
                                   
                           </motion.div>

                  </section>
                    
    </React.Fragment>
  )
}

export default Home