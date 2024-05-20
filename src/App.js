import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Components/service/Services';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navs from './Components/Nav/Navs';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
  
     
      <Router>
        <Navs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
