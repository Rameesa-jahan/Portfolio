import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={ <About/>}></Route>
        <Route path='/projects' element= { <Projects/>}></Route>
        <Route path='/resume' element={ <Resume/>}></Route>      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
