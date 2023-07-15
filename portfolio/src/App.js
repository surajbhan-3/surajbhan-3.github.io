import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Stats from './Components/Stat';
function App() {
  return (
    <div className="App">
     
         <Navbar />
         <Home />
         <About />
         <Skills />
         <Stats />
    </div>
  );
}

export default App;
