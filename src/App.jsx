import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Stats from './Components/Stat';
import Project from './Components/Project';
import Contact from './Components/Contact';
import {HiMiniArrowUpCircle} from "react-icons/hi2"

function App() {
  const  handleScrollUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };
  
  return (
    <div className="App">
     
         <Navbar/>
         <Home />
         <About />
         <Skills />
         <Stats />
         <Project />
         <Contact />
         <div className='scroll-btn'><button className='scroll-up-btn' onClick={handleScrollUpClick} >
                        <a style={{listStyle:"none"}} href="#nav-menu">
                        <HiMiniArrowUpCircle color='limegreen' size={40} />
                        </a></button></div>
                      <div></div>
    </div>
  );
}

export default App;
