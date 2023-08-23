

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
    //   let home = document.querySelector('.home-div')
    //   let skill = document.querySelector(".skills-inside")
    //   let about = document.querySelector(".about-inside")
    //   let stat = document.querySelector(".Stats-inside")
    //   let project = document.querySelector(".projects-inside")
    //   let project_card = document.querySelectorAll(".project-card")
    //   let contact =document.querySelector(".contact-inside")
    //   let contact_container = document.querySelector("#c-c")
      body.style.backgroundColor = body.style.backgroundColor === "black"? "white": "black" ;
    //   home.style.background= home.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black"; 
    //   home.style.color = home.style.color==="white" ? "black" : "white";
    //   skill.style.background= skill.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black";
    //   skill.style.color = skill.style.color==="white" ? "black" : "white";
    //   about.style.background= about.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black";
    //   about.style.color = about.style.color==="white" ? "black" : "white";
    //   stat.style.background= stat.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black";
    //   stat.style.color =  stat.style.color==="white" ? "black" : "white";
    //   project.style.background= project.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black";
    //   project.style.color = project.style.color==="white" ? "black" : "white";
    //   contact.style.background= contact.style.background === "black" ? "radial-gradient(circle at 10% 20%,rgb(255, 229, 168) 0%,rgb(251, 174, 222) 100.7%)" : "black";
    //   contact.style.color = contact.style.color==="white" ? "black" : "white";
    //   contact_container = contact_container.style.color = "white" ? "black" : "white"
    //   project_card.forEach(card=>{
    //     project_card.style.color =project_card.style.color = "white" ? "black" : "white";
      //  })
     
     }

    const burgerMenu = ()=>{
   let bm=document.querySelector(".main-list");
     bm.style.display= bm.style.display=== "block" ? "none":"block";
        
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
                                <li className='nav-link home'><a id='ho' href="#home" > <HiMiniHome className='icons-info' size={20} /> <span>&nbsp;Home</span></a></li>
                                <li className='nav-link about'><a id='ab' href="#about"> <HiMiniUser size={20}  /> <span>&nbsp;About</span></a></li>
                                <li className='nav-link skills'><a id='sk' href="#skills"> <HiMiniCodeBracketSquare size={20} />  <span>&nbsp;Skills</span></a></li>
                                <li className='nav-link stats'><a id='st' href="#stats"> <HiMiniBolt size={20} /> <span>&nbsp;Stats</span></a></li>
                                <li className='nav-link projects'><a  id='pr' href="#projects"><HiSquare3Stack3D size={20}/> <span>&nbsp;Projects</span></a></li>
                                <li className='nav-link  contact'><a id='co' href="#contact"><HiMiniEnvelope/> <span>&nbsp;Contact</span></a></li>
                                <li className='nav-link resume' id='resume-button-1'><a id='resume-link-1' href={Resume} target="_blank" rel="noopener noreferrer" className='googleDrive' download="Suraj-Bhan-Singh-Resume" onClick={openDrive}> <HiMiniDocumentText size={20} /> <span> &nbsp;Resume</span></a></li>
                                 
                             </ul>

                        </div>
                       <div id='burger-menu' onClick={burgerMenu}> <HiSquaresPlus size={30}/> </div>

                        <div className='dark-mode-btn' ><button onClick={handleDarkModeClick}  id='dark-mode-btn'> <HiOutlineSun />  </button></div>

                       
               </div>

        </nav>
        
         
    </React.Fragment>
  )
}

export default Navbar