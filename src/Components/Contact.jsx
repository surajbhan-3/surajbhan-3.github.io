import React from 'react'
import "./styles/Contact.css"
import {HiMiniEnvelope,HiMiniArrowUpCircle} from "react-icons/hi2"
import {FaLinkedin, FaGithub, FaWhatsappSquare} from "react-icons/fa"
import {AiFillHeart} from "react-icons/ai"

function Contact() {

const  handleScrollUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };
  return (
    <React.Fragment>
          
       <section className='contact-section' id='contact'>

                <div className="contact-inside inside">
                        <h1>Contact</h1>

                      <div className="contact-container" id='c-c' >

                               <div className="column-left">
                                      <div className="gmail">
                                        <a href="mailto:surajbhan2boaz@gmail.com"> <HiMiniEnvelope size={30}/> </a>
                                        <span><a className='t-t' href=" mailto:surajbhan2boaz@gmail.com"
                                          id="contact-email" > &nbsp;&nbsp;surajbhan2boaz@gmail.com</a></span>
                                      </div>
                                      <div className="phone">
                                          <a href="mailto:surajbhan2boaz.com"> <FaWhatsappSquare size={30}/> </a>
                                          <span><a href="mailto:sura@gmail.com"
                                            id="contact-phone" >&nbsp;&nbsp;+91 8920213684</a></span>
                                      </div>

                                        <div className="lkd-linkedin">
                                              <a href="https://www.linkedin.com/in/surajbhan-singh/"> <FaLinkedin size={30}/> </a>
                                              <span><a href="https://www.linkedin.com/in/surajbhan-singh/"
                                                id="contact-linkedin" >&nbsp;&nbsp;surajbhan-singh</a></span>
                                        </div>
                                        <div className="gh-github">
                                              <a href="https://github.com/surajbhan-3"> <FaGithub size={30}/> </a>
                                              <span><a href="https://github.com/surajbhan-3"
                                                id="contact-github" >&nbsp;&nbsp;surajbhan-3</a></span>
                                        </div>
                                </div>  

                                  <div className="column-right">
                                      <form action="#">
                                                <div className="fields">
                                                                  <div className="field name">
                                                                    <input type="text" placeholder="Enter Your Name" required />
                                                                  </div>

                                                                  <div className="field email">
                                                                        <input type="email" placeholder="Enter Your Email" required/>
                                                                  </div>
                                                </div>

                                                <div className="fields-2">
                                                                <div className="field Subject">
                                                                  <input type="text" placeholder="Subject" required/>
                                                                </div>
                                                                <div className="field txtarea">
                                                                    <textarea  cols="30" rows="8" placeholder="Write Message.." required></textarea>
                                                                </div>
                                                                <div className="button-area">
                                                                    <button type="submit">Send</button>
                                                                </div>
                                                  </div>
                                      </form>
                                  </div>
                                              

                       </div>
                           
                </div>
           

      </section>





          <div className="footer">
                      <div>Made by me <span><AiFillHeart color='red' size={12}/></span> </div>
                      <div><button className='scroll-up-btn' onClick={handleScrollUpClick} >
                        <a style={{listStyle:"none"}} href="#nav-menu">
                        <HiMiniArrowUpCircle color='limegreen' size={40} />
                        </a></button></div>
                      <div><span>&copy; 2023 Free and Fair use</span></div>
              <span></span>
          </div>


    </React.Fragment>
  )
}

export default Contact