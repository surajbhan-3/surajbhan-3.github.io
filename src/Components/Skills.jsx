import React from 'react'
import "./styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaReact,FaAws } from "react-icons/fa";
import {IoLogoJavascript,IoLogoNodejs} from "react-icons/io"
import {SiMongodb, SiExpress, SiNetlify, SiSocketdotio, SiRedux, SiChartdotjs} from "react-icons/si"
import {TbBrandMysql} from "react-icons/tb"



function Skills() {
  return (
    <React.Fragment>

          <div className="skills-section" id='skills'>
                <div className="skills-inside inside">
                      <h1>Skills</h1>
                      <div className="skills-card">

                                   <div className="card1"><div  className="innerCard1"><FaHtml5  className='skills-card-img html' size={50}/> <br /> <strong className='skills-card-name' >&nbsp; HTML5</strong></div></div>
                                   <div className="card2"><div  className="innerCard2"><FaCss3Alt className='skills-card-img css' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;&nbsp;&nbsp;CSS3</strong></div></div>
                                   <div className="card3"><div  className="innerCard3"><IoLogoJavascript className='skills-card-img js' size={50}/> <br /> <strong className='skills-card-name'>JavaScript</strong></div></div>
                                   <div className="card4"><div  className="innerCard4"><FaReact className='skills-card-img react' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;&nbsp;&nbsp;React</strong></div></div>
                                   <div className="card5"><div  className="innerCard5"><IoLogoNodejs className='skills-card-img nodejs' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;NodeJs</strong></div></div>
                                   <div className="card6"><div  className="innerCard6"><SiMongodb className='skills-card-img md' size={50}/> <br /> <strong className='skills-card-name'>MongoDb</strong></div></div>
                                   <div className="card7"><div  className="innerCard7"><SiExpress className='skills-card-img ex' size={50}/> <br /> <strong className='skills-card-name'>Express</strong></div></div>
                                   <div className="card8"><div  className="innerCard8"><TbBrandMysql className='skills-card-img sql' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;&nbsp;&nbsp;SQL</strong></div></div>
                                   <div className="card9"><div  className="innerCard9"><FaAws className='skills-card-img aws' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;&nbsp;&nbsp;&nbsp;AWS</strong></div></div>
                                   <div className="card10"><div className="innerCard10"><SiNetlify className='skills-card-img netlify' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;&nbsp;Netlify</strong></div></div>
                                   <div className="card11"><div className="innerCard11"><SiSocketdotio className='skills-card-img socket' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;Socket.io</strong></div></div>
                                   <div className="card12"><div className="innerCard12"><SiRedux className='skills-card-img redux' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;Redux</strong></div></div>
                                   <div className="card13"><div className="innerCard13"><SiChartdotjs className='skills-card-img chartjs' size={50}/> <br /> <strong className='skills-card-name'>&nbsp;Chart.js</strong></div></div>

                      </div>
                    </div>   
          </div>

    </React.Fragment>
  )
}

export default Skills