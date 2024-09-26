import React, { useState, useEffect } from 'react';
import '../components/Counting.css'; // Import the CSS file for styling
import TerminalNavbar from '../components/NavBar';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';

const Counting = ({ onComplete }) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${now.toDateString()} ${hours}:${minutes}:${seconds}`;
  };

  
  const fullMessage = "Explore My Achievements: Brought to You by Ankit Dubey";

  const summary = [
    `Last login: ${getCurrentDateTime()} on my_skills`,
    "ankitdubey@ad-MacBook-Air ~ % echo 'Loading skills...'",
    "Go: Ready for high-performance concurrency.",
    "ankitdubey@ad-MacBook-Air ~ % Django",
    "Django: Web development with speed and precision.",
    "ankitdubey@ad-MacBook-Air ~ % React",
    "React: Building dynamic UIs with ease.",
    "ankitdubey@ad-MacBook-Air ~ % Python",
    "Python: Versatile, powerful, and efficient.",
    "ankitdubey@ad-MacBook-Air ~ % SQL",
    "SQL: Managing databases like a pro.",
    "ankitdubey@ad-MacBook-Air ~ % Full-Stack Developer",
    "Full-Stack: End-to-end application expertise.",
    "ankitdubey@ad-MacBook-Air ~ % echo 'All skills loaded!'",
    "Shutting down... 🖥️"
  ];

  

  return (<>
 
 <TerminalNavbar/>
    <div className="counting-typing-effect">

      

      <div className="message">
        <h2>{fullMessage}</h2>
      </div>

      <div className="terminal-container">
        <div className="terminal2">
          <div className="close-buttons" style={{ marginTop: "-10px", marginLeft: "-10px", marginBottom: "10px" }}>
            <div className="close-button" data-action="minimize"></div>
            <div className="close-button" data-action="maximize"></div>
            <div className="close-button" data-action="close"></div>
          </div>
          <pre style={{fontWeight:"bold" , color:"#50fa7b"}}>{summary.join('\n')}</pre>
        </div>
      </div>

      <div className="call-to-action" style={{marginTop:"90px"}}>
    
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </div>

    </div>
   <div style={{marginLeft:"-30px"}}>
   <TechStack/>
   </div>
    <Footer quote="Code is like humor. When you have to explain it, it’s bad. - Cory House" />
    </>
  );
};

export default Counting;
