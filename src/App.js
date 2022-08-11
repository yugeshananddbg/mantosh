
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Course from './Components/Course';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/course" element={<Course/>}/>
      </Routes>
    </Router>
  );
}

export default App;
