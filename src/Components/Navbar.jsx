

import React from 'react'
import "./styles/Navbar.css";
import profilePicture from  "../assets/surajbhan.jpg";
import {HiSquaresPlus, HiOutlineSun, HiMiniUser} from "react-icons/hi2";


function Navbar() {
  return (
    <React.Fragment>
        <nav>
               <div className='nav-container'>
                        <div className="logo">
                                <a href="#"> <img src={profilePicture} alt="" /></a>
                        </div>
                        <div id="main-list-div" className='main-list'>

                             <ul className='ul-links'>
                                <li className='nav-icons home-icon'><a href="#" id='home'>  Home</a></li>
                                <li className='nav-icons About-icon'><a href="#"> <HiMiniUser size={20} /> <span>About</span></a></li>
                                <li className='nav-icons skills-icon'><a href="#">Skills</a></li>
                                <li className='nav-icons stats-icon'><a href="#">Stats</a></li>
                                <li className='nav-icons project-icon'><a href="#">Projects</a></li>
                                <li className='nav-icons  contact-icon'><a href="#">Contact</a></li>
                                <li className='nav-icons  '><button>Resume</button></li>
                                <li ><button id='dark-mode-btn'> <HiOutlineSun /></button></li>
                               
                                <li id='burger-menu'> <HiSquaresPlus /> </li>
                                
                             </ul>
                            

                        </div>
                       
               </div>

        </nav>
        
         
    </React.Fragment>
  )
}

export default Navbar