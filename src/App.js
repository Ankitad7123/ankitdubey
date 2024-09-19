import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Counting from './components/Counting';
import TechStack from './components/TechStack';
// import Certifications from './components/Certifications';
import Home from "./components2/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components2/About';
import Contact from './components2/Contact';
import WebSocketChat from './components2/Chat';

const App = () => {
  const [showContent, setShowContent] = useState(false); // Control visibility of Navbar and TechStack

  // Callback function to display content after counting is done
  const handleCountingComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="App">
      <Router basename='/ankitdubey'>
        <Routes>
          <Route path="/" element={
            <>
              {showContent && <Navbar />} 
              <div className="content">
                <Counting onComplete={handleCountingComplete} />
              </div>
              {showContent && (
                <div>
                  <div className="tech1">
                    <TechStack /> 
                  </div>
                  <Footer/>
                </div>
              )}
            </>
          }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
