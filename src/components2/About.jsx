// import React from 'react';
// import './About.css'; // Make sure to create this CSS file with the provided styles
// import TerminalNavbar from '../components/NavBar';
// import Footer from '../components/Footer';

// const About = () => {
//   return (<>
//     <>
//     <TerminalNavbar/>
      
//     </>
//     <img  style={{backgroundBlendMode:"darken" , width:"30vw"  , height:"30vh", position:"relative" , marginLeft:"420px" , marginTop:"10px" , marginBottom:"-10px", border:"50%"}}src='https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif' />
       

    
//     <div className="about-container">
       
       
//       <div className="about-content">
//       <div style={{display:"flex", flexDirection:"row" , marginTop:"-16px" , marginLeft:"-15px"}}>
//       <div class="close-button" data-action="minimize"></div>
//             <div class="close-button" data-action="maximize"></div>
//             <div class="close-button" data-action="close"></div>
//       </div>
//         <p className="about-title">
// ankitdubey@about-station ~ % abtme</p>
//         <p className="about-text">Hi,I'm Ankit Dubey, a passionate software developer with a focus on React, Django, and Python. I hold a Bachelor of Engineering in Computer Science from Atharva College of Engineering and have hands-on experience with various technologies including Docker and SQL. My journey has involved developing web applications, and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.
//         </p>
        
//         <p className="about-title">
// ankitdubey@about-station ~ % more</p>
//         <p className="about-text">
//           Outside of coding, I enjoy exploring new tech trends, networking with fellow developers, and working on creative side projects. Feel free to connect with me to discuss technology, collaborate on projects, or just have a chat about the latest in tech!
//         </p>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default About;

import React from 'react';
import TerminalNavbar from '../components/NavBar';
import Footer from '../components/Footer';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <>
      <TerminalNavbar />

      {/* Gif Image */}

      {/* About Section */}
      <div className="contact-container">
        <div className="terminal-box">
          {/* Close Buttons */}
          <div className="close-buttons">
            <div className="close-button yellow"></div>
            <div className="close-button green"></div>
            <div className="close-button red"></div>
          </div>

          {/* Terminal Content */}
          <p className="terminal-command">ankitdubey@about-station ~ % abtme</p>

          <p className="terminal-body">
            Hi, I'm Ankit Dubey, a software developer specializing in React, Django, and Python. I have a Bachelor's in Computer Engineering from Atharva College and hands-on experience with Docker, SQL, and web app development. I'm passionate about learning new technologies and staying ahead in the evolving tech world.
          </p>

          <p className="terminal-command">ankitdubey@about-station ~ % more</p>

          <p className="terminal-body">
            Outside coding, I explore tech trends, network with developers, and work on creative projects. Open to tech chats and collaborations!
          </p>
        </div>
      </div>
      <Footer quote="Knowing yourself is the beginning of all wisdom. - Aristotle" />
    </>
  );
};

export default About;


