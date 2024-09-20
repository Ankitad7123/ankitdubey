// import React, { useState, useEffect } from 'react';
// import './Counting.css'; // Import the CSS file for styling

// const Counting = ({ onComplete }) => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');
//   const [isCountingDone, setIsCountingDone] = useState(false);
//   const [isMessageDone, setIsMessageDone] = useState(false);

//   const fullMessage = "Explore My Achievements: Brought to You by Ankit Dubey";
//   const summary = "Full-Stack Developer | Go | Django | React | Python | SQL";

//   useEffect(() => {
//     // Counting effect
//     let countInterval;
//     if (!isCountingDone) {
//       countInterval = setInterval(() => {
//         setCount(prevCount => {
//           const newCount = prevCount + 1;
//           if (newCount > 100) {
//             setIsCountingDone(true); // Mark counting as done
//             clearInterval(countInterval);
//           }
//           return newCount;
//         });
//       }, 50); // Adjust the interval for counting speed
//     }

//     // Typing effect for the message
//     let typingInterval;
//     if (isCountingDone && !isMessageDone) {
//       let index = 0;
//       typingInterval = setInterval(() => {
//         setMessage(fullMessage.substring(0, index + 1));
//         index += 1;
//         if (index === fullMessage.length) {
//           setIsMessageDone(true);
//           clearInterval(typingInterval);
//         }
//       }, 100); // Adjust the interval for typing speed
//     }

//     // Notify parent component once the entire animation is done
//     if (isCountingDone && isMessageDone) {
//       onComplete();
//     }

//     return () => {
//       clearInterval(countInterval);
//       clearInterval(typingInterval);
//     };
//   }, [isCountingDone, isMessageDone, onComplete]);

//   return (
//     <div className="counting-typing-effect">
//       {!isCountingDone && (
//         <div  className="count">
//           <h3 style={{fontSize:`${count}px`}}>{count} %</h3>
         
//           <input type="range" min="0" value={count}
       
//         />
         
//         </div>
//       )}
      
//       {isCountingDone && (
//         <div className="message">
//           <h2>{message}</h2>
//         </div>
//       )}

//       {isMessageDone && (
//         <div className="summary">
//           <p className="summary-text">{summary}</p>
//           <div className="call-to-action">
//             <p>Discover my skills and experience below.</p>
//             <div className="scroll-indicator">
//               <span className="scroll-text">Scroll Down</span>
//               <div className="mouse-icon">
//                 <div className="mouse-wheel"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Counting;

// import React, { useState, useEffect } from 'react';
// import './Counting.css'; // Import the CSS file for styling
// import { useNavigate } from 'react-router-dom';


// const Counting = ({ onComplete }) => {
//   const [commandIndex, setCommandIndex] = useState(0);
//   const [message, setMessage] = useState('');
//   const [message2, setMessage2] = useState('');
//   const [message3, setMessage3] = useState('');
//   const [summaryIndex, setSummaryIndex] = useState(0); // New state for summary commands
//   const [isCommandsDone, setIsCommandsDone] = useState(false);
//   const [isMessageDone, setIsMessageDone] = useState(false);
//   const [isSummaryDone, setIsSummaryDone] = useState(false);
//    // New state for summary completion
//   const navigate = useNavigate(); 
//   const getCurrentDateTime = () => {
//     const now = new Date();
//     // const day = String(now.getDate()).padStart(2, '0');
//     // const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     // const year = now.getFullYear();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     return `${now.toDateString()} ${hours}:${minutes}:${seconds}`;
//   };
  

//   // const commands = [
//   //   `Last login: ${getCurrentDateTime()} website`,
//   //   "ankitdubey@ad-MacBook-Air ~ % Initializing system...",
//   //   "ankitdubey@ad-MacBook-Air ~ % Compiled with warnings.",
//   //   "ankitdubey@ad-MacBook-Air ~ % Loading modules...",
//   //   "ankitdubey@ad-MacBook-Air ~ % Error: Computer is fucked.",
//   //   "ankitdubey@ad-MacBook-Air ~ % Please contact support.",
//   //   "ankitdubey@ad-MacBook-Air ~ % Rebooting...",
//   // ];
//   const commands = [
//     `Last login: ${getCurrentDateTime()} website`,
//     "ankitdubey@ad-MacBook-Air ~ % brew update",
//     "Updated Homebrew from 3.3.0 to 3.4.0.\n==> Updated 10 formulae.",
//     "ankitdubey@ad-MacBook-Air ~ % brew upgrade",
//     "Upgraded 5 packages.\n==> Upgraded package1 to 1.2.3\n==> Upgraded package2 to 2.3.4",
//     "ankitdubey@ad-MacBook-Air ~ % git pull origin main",
//     "Already up to date.",
//     "ankitdubey@ad-MacBook-Air ~ % npm install",
//     "added 50 packages from 40 contributors and audited 150 packages in 5s\nfound 0 vulnerabilities",
//     "ankitdubey@ad-MacBook-Air ~ % npm start",
//     "Starting development server...\nLocal: http://localhost:3000\nPress Ctrl+C to stop",
//     "ankitdubey@ad-MacBook-Air ~ % docker ps",
//     "CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS         PORTS                    NAMES\n1234abcd5678   my-app-image   \"docker-entrypoint.sh\"   2 hours ago    Up 2 hours     0.0.0.0:80->80/tcp       my-app",
//     "ankitdubey@ad-MacBook-Air ~ % open .",
//     "Opening Finder in the current directory.",
//     "ankitdubey@ad-MacBook-Air ~ % python3 manage.py runserver",
//     "Django version 3.2.8, using settings 'myproject.settings'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL+C.",
//     "ankitdubey@ad-MacBook-Air ~ % tail -f /var/log/system.log",
//     "==> /var/log/system.log <==\nSep 12 16:14:02 my-computer kernel: ...\nSep 12 16:14:03 my-computer systemd: ...",
//     "ankitdubey@ad-MacBook-Air ~ % sudo shutdown -r now",
//     "System is shutting down. Rebooting..."
// ]



//   const fullMessage = " Explore My Achievements: Brought to You by Ankit Dubey";
//   const summary = [
//     `Last login: ${getCurrentDateTime()} my_skills`,
//     "ankitdubey@ad-MacBook-Air ~ % Go",
//     "zsh: command not found: Go",
//     "ankitdubey@ad-MacBook-Air ~ % Django",
//     "zsh: command not found: Django",
//     "ankitdubey@ad-MacBook-Air ~ % React",
//     "zsh: command not found: React",
//     "ankitdubey@ad-MacBook-Air ~ % Python",
//     "zsh: command not found: Python",
//     "ankitdubey@ad-MacBook-Air ~ % sql",
//     "zsh: command not found: sql",
//     "ankitdubey@ad-MacBook-Air ~ % Full-Stack Developer",
//     "zsh: command not found: Full-Stack Developer",
//     "shuting down......"
//   ];

//   useEffect(() => {
//     // Command typing effect
//     let commandInterval;
//     if (!isCommandsDone) {
//       commandInterval = setInterval(() => {
//         if (commandIndex < commands.length) {
//           setMessage(prev => prev + commands[commandIndex] + '\n');
//           setCommandIndex(prev => prev + 1);
//         } else {
//           setIsCommandsDone(true);
//           clearInterval(commandInterval);
//         }
//       }, 1000); // Adjust timing to control how fast commands appear
//     }

//     // Typing effect for the full message after commands are done
//     let typingInterval;
//     if (isCommandsDone && !isMessageDone) {
//       let index = 0;
//       typingInterval = setInterval(() => {
//         setMessage3(fullMessage.substring(0, index + 1));
//         index += 1;
//         if (index === fullMessage.length) {
//           setIsMessageDone(true);
//           clearInterval(typingInterval);
//         }
//       }, 100); // Adjust the interval for typing speed
//     }
    
//     // Typing effect for summary commands after full message is done
//     let summaryInterval;
//     if (isMessageDone && !isSummaryDone) {
//       summaryInterval = setInterval(() => {
//         if (summaryIndex < summary.length) {
//           setMessage2(prev => prev + summary[summaryIndex] + '\n');
//           setSummaryIndex(prev => prev + 1);
//         } else {
//           setIsSummaryDone(true);
//           clearInterval(summaryInterval);
//         }
//       }, 1000); // Adjust timing to control how fast summary commands appear
//     }

//     // Notify parent component once the entire animation is done
//     if (isCommandsDone && isMessageDone && isSummaryDone) {
//       onComplete();
//     }
//     if (isCommandsDone && isMessageDone && isSummaryDone) {
//       navigate('/home'); // Navigate to /home
//     }


//     return () => {
//       clearInterval(commandInterval);
//       clearInterval(typingInterval);
//       clearInterval(summaryInterval);
//     };
//   }, [commandIndex,  isCommandsDone, isMessageDone, isSummaryDone, summaryIndex, onComplete]);

//   return (
//     <div className="counting-typing-effect">
//       {!isCommandsDone && (
//         <div class="terminal-container" style={{height:"100vh" , marginTop:"-40px" ,overflowY:"hidden"   , border:"2px solid black" , borderRadius:"10px"}}>
//         <div class="terminal-header">
//           <div class="close-buttons" style={{marginTop:"-10px"}}>
//             <div class="close-button" data-action="minimize"></div>
//             <div class="close-button" data-action="maximize"></div>
//             <div class="close-button" data-action="close"></div>
//           </div>
//         </div>
//         <div className="terminal">
//           <pre style={{ fontFamily: 'Courier, monospace', color: '#ffffff', fontSize: '1.1rem' , marginTop:"20px" , marginLeft:"15px" , fontWeight:"bold" , color:"#50fa7b"}}>{message}</pre>
//         </div>
//         </div>
//       )}

//       {isCommandsDone && (
//         <div className="message" style={{marginTop:"-85px" , color:"red"}}>
//           <h2>{message3}</h2>
//         </div>
//       )}

//       {isMessageDone &&  (
//         <div class="terminal-container">
//         <div class="terminal-header">
          
//         </div>
//         <div className="terminal2">
//         <div class="close-buttons" style={{marginTop:"-10px" , marginLeft:"-10px" , marginBottom:"10px"}}>
//             <div class="close-button" data-action="minimize"></div>
//             <div class="close-button" data-action="maximize"></div>
//             <div class="close-button" data-action="close"></div>
            
//           </div>
//           <pre style={{ fontWeight:"bold" , color:"#50fa7b"}}>{message2}</pre>
          
          
//   </div>
        
// </div>
//       )}

      
   
//     </div>
//   );
// };

// export default Counting;



import React, { useState, useEffect } from 'react';
import './Counting.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Counting = ({ onComplete }) => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [summaryIndex, setSummaryIndex] = useState(0); // New state for summary commands
  const [isCommandsDone, setIsCommandsDone] = useState(false);
  const [isMessageDone, setIsMessageDone] = useState(false);
  const [isSummaryDone, setIsSummaryDone] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false); // New state for blackout effect
  const navigate = useNavigate(); 
  const [showSkip, setShowSkip] = useState(true);

  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${now.toDateString()} ${hours}:${minutes}:${seconds}`;
  };

  const commands = [
    `Last login: ${getCurrentDateTime()} website`,
    "ankitdubey@ad-MacBook-Air ~ % brew update",
    "Updated Homebrew from 3.3.0 to 3.4.0.\n==> Updated 10 formulae.",
    "ankitdubey@ad-MacBook-Air ~ % brew upgrade",
    "Upgraded 5 packages.\n==> Upgraded package1 to 1.2.3\n==> Upgraded package2 to 2.3.4",
    "ankitdubey@ad-MacBook-Air ~ % git pull origin main",
    "Already up to date.",
    "ankitdubey@ad-MacBook-Air ~ % npm install",
    "added 50 packages from 40 contributors and audited 150 packages in 5s\nfound 0 vulnerabilities",
    "ankitdubey@ad-MacBook-Air ~ % npm start",
    "Starting development server...\nLocal: http://localhost:3000\nPress Ctrl+C to stop",
    "ankitdubey@ad-MacBook-Air ~ % docker ps",
    "CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS         PORTS                    NAMES\n1234abcd5678   my-app-image   \"docker-entrypoint.sh\"   2 hours ago    Up 2 hours     0.0.0.0:80->80/tcp       my-app",
    "ankitdubey@ad-MacBook-Air ~ % open .",
    "Opening Finder in the current directory.",
    "ankitdubey@ad-MacBook-Air ~ % python3 manage.py runserver",
    "Django version 3.2.8, using settings 'myproject.settings'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL+C.",
    "ankitdubey@ad-MacBook-Air ~ % tail -f /var/log/system.log",
    "==> /var/log/system.log <==\nSep 12 16:14:02 my-computer kernel: ...\nSep 12 16:14:03 my-computer systemd: ...",
    "ankitdubey@ad-MacBook-Air ~ % open -a 'Safari'",
    "Force opening Safari browser...",
  ];

  const fullMessage = " Explore My Achievements: Brought to You by Ankit Dubey";
  const summary = [
    `Last login: ${getCurrentDateTime()} my_skills`,
    "ankitdubey@ad-MacBook-Air ~ % Go",
    "zsh: command not found: Go",
    "ankitdubey@ad-MacBook-Air ~ % Django",
    "zsh: command not found: Django",
    "ankitdubey@ad-MacBook-Air ~ % React",
    "zsh: command not found: React",
    "ankitdubey@ad-MacBook-Air ~ % Python",
    "zsh: command not found: Python",
    "ankitdubey@ad-MacBook-Air ~ % sql",
    "zsh: command not found: sql",
    "ankitdubey@ad-MacBook-Air ~ % Full-Stack Developer",
    "zsh: command not found: Full-Stack Developer",
    "shutting down......"
  ];

  useEffect(() => {
    // Set a timeout to hide the "skip" instruction after 2 seconds
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 200);

  
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Command typing effect
    let commandInterval;
    if (!isCommandsDone) {
      commandInterval = setInterval(() => {
        if (commandIndex < commands.length) {
          setMessage(prev => prev + commands[commandIndex] + '\n');
          setCommandIndex(prev => prev + 1);
        } else {
          setIsCommandsDone(true);
          clearInterval(commandInterval);
        }
      }, 800); // Adjust timing to control how fast commands appear
    }

    // Typing effect for the full message after commands are done
    let typingInterval;
    if (isCommandsDone && !isMessageDone) {
      let index = 0;
      typingInterval = setInterval(() => {
        setMessage3(fullMessage.substring(0, index + 1));
        index += 1;
        if (index === fullMessage.length) {
          setIsMessageDone(true);
          clearInterval(typingInterval);
        }
      }, 100); // Adjust the interval for typing speed
    }
    
    // Typing effect for summary commands after full message is done
    let summaryInterval;
    if (isMessageDone && !isSummaryDone) {
      summaryInterval = setInterval(() => {
        if (summaryIndex < summary.length) {
          setMessage2(prev => prev + summary[summaryIndex] + '\n');
          setSummaryIndex(prev => prev + 1);
        } else {
          setIsSummaryDone(true);
          clearInterval(summaryInterval);
        }
      }, 1000); // Adjust timing to control how fast summary commands appear
    }

    // Blackout effect and navigation after summary is done
    if (isSummaryDone && !isBlackout) {
      setIsBlackout(true);
      setTimeout(() => {
        navigate('/home'); // Navigate to /home after blackout
      }, 3500); // Blackout duration
    }

    // Notify parent component once the entire animation is done
    if (isCommandsDone && isMessageDone && isSummaryDone && isBlackout) {
      onComplete();
    }

    

    return () => {
      clearInterval(commandInterval);
      clearInterval(typingInterval);
      clearInterval(summaryInterval);
    };
  }, [commandIndex, isCommandsDone, isMessageDone, isSummaryDone, summaryIndex, isBlackout, onComplete, navigate]);
  const getSkipInstructionStyles = () => {
    if (window.innerWidth < 600) {
      return {
        position: 'absolute',
        top: '-20px',
        right: '10px',

        color:"green",
        fontFamily:"monospace",
        fontSize: '16px', // Adjust for small screens
      };
    } else if (window.innerWidth < 900) {
      return {
        position: 'absolute',
        top: '10px',
        fontFamily:"monospace",
        right: '14px',
        color:"green",
        fontSize: '14px', // Adjust for medium screens
      };
    } else {
      return {
        
        position: 'absolute',
        color:"green",
        top: '10px',
        right: '16px',
        // color: 'gray',
        fontSize: '21px',
        fontFamily:"monospace" // Adjust for large screens
      };
    }
  };

  return (
    <div className="counting-typing-effect">
      {!isCommandsDone && (
        <div className="terminal-containerbig" >
          <div className="terminal-header_big">
            <div className="close-buttons2" style={{marginTop:"45px"}}>
              <div className="close-button" data-action="minimize"></div>
              <div className="close-button" data-action="maximize"></div>
              <div className="close-button" data-action="close" onClick={()=>{ navigate('/home')}}> {showSkip && (
              <div className="skip-instruction" style={getSkipInstructionStyles()}>
               skip&#x2193;
              </div>
            )}</div>
            </div>
          </div>
          <div className="terminal_big">
          
      <pre className='pre'
        
      >
        {message}
      </pre>
    </div>
        </div>
      )}
      

      {isCommandsDone && !isBlackout && (
        <div className="message23" style={{marginTop:"-85px" , color:"red"}}>
          <h2>{message3}</h2>
        </div>
      )}

      {isMessageDone && !isBlackout && (
        <div class="terminal-container">
               <div class="terminal-header">
                  
          </div>
    <div className="terminal23">
       <div class="close-buttons" style={{marginTop:"-10px" , marginLeft:"-10px" , marginBottom:"10px"}}>
            <div class="close-button" data-action="minimize"></div>
                   <div class="close-button" data-action="maximize"></div>
        <div class="close-button" data-action="close"></div>
                    
         </div>
         <pre style={{ fontWeight:"bold" , color:"#50fa7b"}}>{message2}</pre>
                  
                  
     </div>
                
  </div>
      )}
      

      {isBlackout && (
       <div class="blackout show">
       <div class="blackout-content">
        
         <div class="icon-container">
           <div class="icon">⚠️</div>
         </div>
     
    
         <div class="warning-message">
           SYSTEM ERROR: CRITICAL MALFUNCTION DETECTED
         </div>
     
     
         <div class="error-text">
           Your system has encountered a critical problem and needs to restart. 
         </div>
     
      
         <div class="error-code">
           Error Code: 0x80004005 - Unspecified system failure
         </div>
     
         
         <div class="loading-dot-container">
           <div class="loading-dot"></div>
           <div class="loading-dot"></div>
           <div class="loading-dot"></div>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default Counting;

