import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import {useNavigate}  from  "react-router-dom"

const TerminalNavbar = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()
 
  const originalName = "ankitdubey@nav-station ~ % lsj";
  const nameDisplay = "ankitdubey@nav-station ~ % ls";

  useEffect(() => {
    const scrambleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let index = 0;

    const nameInterval = setInterval(() => {
      const scrambledName = originalName
        .split('')
        .map((char, i) => (i < index ? char : scrambleLetters[Math.floor(Math.random() * scrambleLetters.length)]))
        .join('');
      setName(scrambledName);
      index += 1;
      if (index === originalName.length) {
        clearInterval(nameInterval);
      }
    }, 150); // Adjust the interval timing as per your requirement

    return () => clearInterval(nameInterval); // Clear interval on component unmount
  }, [originalName]);

  const handleRefresh = () => {
    const scrambleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let index = 0;

    const nameInterval = setInterval(() => {
      const scrambledName = originalName
        .split('')
        .map((char, i) => (i < index ? char : scrambleLetters[Math.floor(Math.random() * scrambleLetters.length)]))
        .join('');
      setName(scrambledName);
      index += 1;
      if (index === originalName.length) {
        clearInterval(nameInterval);
      }
    }, 150); // Adjust the interval timing as per your requirement

    return () => clearInterval(nameInterval); // Clear interval on component unmount
  }

  

  return (
    <nav className="terminal-navbar" >
      <div className="terminal-header12">
        <div className="header-buttons">
          <div className="header-button" data-action="minimize"></div>
          <div className="header-button" data-action="maximize"></div>
          <div className="header-button" data-action="close"></div>
        </div>
      </div>
      <div className="terminal-body12">
        <div className="terminal-logo">
          <a
            style={{marginLeft:"-75px" , marginTop:"19px" ,cursor: "pointer", color: "black", fontFamily: "monospace", fontSize: "1.2em", fontWeight: "bold" }}
            className="logo-link"
            onClick={handleRefresh}
          >
            {name.slice(0, nameDisplay.length)}
          </a>
          <div className="ls">
            <button onClick={()=>{navigate("/home")}} style={{ cursor: "pointer", textDecoration: "none", color: "#fdcb01" , border:"none" , backgroundColor:"white" , fontFamily:"monospace" }}>func Home()</button>
            <button onClick={()=>{navigate("/about")}} style={{ cursor: "pointer", textDecoration: "none", color: "#06a163" , border:"none" , backgroundColor:"white", fontFamily:"monospace" }}>func About()</button>
            <button onClick={()=>{navigate("/contact")}} style={{ cursor: "pointer", textDecoration: "none", color: "red" , border:"none" , backgroundColor:"white" , fontFamily:"monospace"}}>func contact()</button>
          </div>
         
          
          </div>
          <div>
        </div>
      </div>
    </nav>
  );
};

export default TerminalNavbar;
