

import React from 'react'
import "./styles/Navbar.css";
import profilePicture from  "../assets/surajbhan.jpg";
import {HiSquaresPlus, HiOutlineSun, HiMiniUser, HiMiniHome, HiMiniDocumentText, HiMiniCodeBracketSquare,HiMiniEnvelope, HiMiniBolt, HiSquare3Stack3D} from "react-icons/hi2";
import Resume from "../assets/Suraj-Bhan-Singh-Resume.pdf"  


function openDrive() {
window.open(
    "https://drive.google.com/file/d/1BbBp0dkaFIUSmR-HUUaGasa3KRr_YMli/view?usp=sharing"
);
}




function Navbar() {

    const handleDarkModeClick = () => {
      let body = document.querySelector("body");
      body.style.backgroundColor = "black";
      body.style.color = "black";
    }
  
  return (
    <React.Fragment>
        <nav className='nav-link home'>
               <div id='nav-menu'>
                        <div className="logo">
                                <a href="#home"> <img src={profilePicture} alt="" /></a>
                        </div>
                        <div id='h1-name'><h5>Suraj bhan singh</h5></div>

                        <div id="main-list-div" className='main-list'>
                             <ul className='ul-links'>
                                <li className='nav-link home'><a id='ho' href="#home" > <HiMiniHome size={20} /> <span>&nbsp;Home</span></a></li>
                                <li className='nav-link about'><a id='ab' href="#about"> <HiMiniUser size={20}  /> <span>&nbsp;About</span></a></li>
                                <li className='nav-link skills'><a id='sk' href="#skills"> <HiMiniCodeBracketSquare size={20} />  <span>&nbsp;Skills</span></a></li>
                                <li className='nav-link stats'><a id='st' href="#stats"> <HiMiniBolt size={20} /> <span>&nbsp;Stats</span></a></li>
                                <li className='nav-link projects'><a  id='pr' href="#projects"><HiSquare3Stack3D size={20}/> <span>&nbsp;Projects</span></a></li>
                                <li className='nav-link  contact'><a id='co' href="#contact"><HiMiniEnvelope/> <span>&nbsp;Contact</span></a></li>
                                <li className='nav-link resume' id='resume-button-1'><a id='resume-link-1' href={Resume} target="_blank" rel="noopener noreferrer" className='googleDrive' download="Suraj-Bhan-Singh-Resume" onClick={openDrive}> <HiMiniDocumentText size={20} /> <span> &nbsp;Resume</span></a></li>
                                 
                             </ul>

                        </div>
                       <div id='burger-menu'> <HiSquaresPlus /> </div>

                        <div className='dark-mode-btn' ><button id='dark-mode-btn' onClick={handleDarkModeClick}> <HiOutlineSun />  </button></div>

                       
               </div>

        </nav>
        
         
    </React.Fragment>
  )
}

export default Navbar