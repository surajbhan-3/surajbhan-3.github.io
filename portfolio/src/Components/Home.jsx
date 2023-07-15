import React from 'react'
import "./styles/Home.css"
import profilePicture from  "../assets/surajbhan.jpg"
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaQuora} from "react-icons/fa";
import {HiMail} from "react-icons/hi"

function Home() {
  return (
    <React.Fragment>
                  <section className='home-section' id='home'>

                           <div className="home-div">
                         {FaGithub}
                              <div className="home-details">
                                <h1>Welcome to my Portfolio ! 🙋</h1>
                                    <p id="user-detail">Hii I am Suraj Bhan Singh  Full Stack Web Developer. 
                                    As a Full Stack Web Developer, I am eager to learn and committed to harnessing my passion and dedication to create innovative and user-centric solutions that make a positive impact in the digital world.
                                    
                                    </p>

                                   <h2>Connect with me :-</h2>
                                   <div className="social-media">
                                         <div><FaGithub size={30} /></div>
                                         <div><FaLinkedinIn size={30}  /></div>
                                         <div><FaTwitter size={30}  /></div>
                                         <div><FaWhatsapp size={30}  /></div>
                                         <div><FaQuora size={30}  /></div>
                                         <div><HiMail size={30}  /></div>
                                     
                                   </div>
                                  
                              </div>
                              <div className="home-img">
                                <div>
                                <img  src={profilePicture} alt="" />
                                </div>
                                
                              </div>
                                   
                           </div>

                  </section>
                    
    </React.Fragment>
  )
}

export default Home