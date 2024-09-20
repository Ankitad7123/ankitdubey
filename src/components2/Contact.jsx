// import React, { useState } from 'react';
// import TerminalNavbar from '../components/NavBar';
// import Footer from '../components/Footer';

// const Contact = () => {
//     const [input123 , setInput123] = useState("")
//     const Direction =(e)=>{
//    if e.data == "x.com"{

//    }
//     }
//   return (
//     <>
//       <TerminalNavbar />
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: 'white'
//       }}>
//         <div style={{
//           backgroundColor: '#1e1e1e',
//           padding: '30px',
//           borderRadius: '12px',
//           width: '50vw',
//           height: '50vh',
//           boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
//           color: '#f8f8f2',
//           fontFamily: '"Courier New", Courier, monospace',
//           position: 'relative'
//         }}>
//           {/* Close buttons */}
//           <div style={{ display: 'flex', marginBottom: '16px' }}>
//             <div style={{
//               width: '15px',
//               height: '15px',
//               borderRadius: '50%',
//               backgroundColor: '#f4c20d',
//               marginRight: '8px'
//             }}></div>
//             <div style={{
//               width: '15px',
//               height: '15px',
//               borderRadius: '50%',
//               backgroundColor: '#4caf50',
//               marginRight: '8px'
//             }}></div>
//             <div style={{
//               width: '15px',
//               height: '15px',
//               borderRadius: '50%',
//               backgroundColor: '#d9534f',
//               marginRight: '8px'
//             }}></div>
//           </div>

//           {/* Terminal body */}
//           <div style={{ color: '#f8f8f2', fontSize: '1.2rem' }}>
//             {/* Terminal command */}
//             <p style={{ margin: '8px 0' ,color: '#50fa7b', fontWeight: 'bold'  }}>
//               <span style={{ color: '#50fa7b', fontWeight: 'bold' }}>ankitdubey@about-station ~ % </span>contact me
//             </p>

//             {/* Links styled like terminal output */}
//             <p style={{ margin: '12px 0' }}>
//               <a href="https://www.linkedin.com/in/ankit-dubey" target="_blank" rel="noopener noreferrer" style={{
//                 color: '#8be9fd',
//                 fontWeight: 'bold',
//                 textDecoration: 'none',
//                 marginRight: '24px',
//                 transition: 'color 0.3s ease'
//               }}
//                 onMouseOver={(e) => e.target.style.color = '#ff79c6'}
//                 onMouseOut={(e) => e.target.style.color = '#8be9fd'}>
//                 LinkedIn
//               </a>
//               <a href="mailto:ankit@example.com" target="_blank" rel="noopener noreferrer" style={{
//                 color: '#8be9fd',
//                 fontWeight: 'bold',
//                 textDecoration: 'none',
//                 marginRight: '24px',
//                 transition: 'color 0.3s ease'
//               }}
//                 onMouseOver={(e) => e.target.style.color = '#ff79c6'}
//                 onMouseOut={(e) => e.target.style.color = '#8be9fd'}>
//                 Gmail
//               </a>
//               <a href="https://twitter.com/ankitdubey" target="_blank" rel="noopener noreferrer" style={{
//                 color: '#8be9fd',
//                 fontWeight: 'bold',
//                 textDecoration: 'none',
//                 marginRight: '24px',
//                 transition: 'color 0.3s ease'
             
//               }}
//                 onMouseOver={(e) => e.target.style.color = '#ff79c6'}
//                 onMouseOut={(e) => e.target.style.color = '#8be9fd'}>
//                 X.com
//               </a>
//             </p>

//             {/* Terminal command with input field */}
//             <p style={{ margin: '8px 0' ,color: '#50fa7b', fontWeight: 'bold' }}>
//               <span style={{ color: '#50fa7b', fontWeight: 'bold' }}>ankitdubey@about-station ~ % </span>cd <input type="text" style={{
//                 background: 'none',
//                 color: '#50fa7b', 
//                 fontWeight: 'bold',

//                 border: 'none',
                
//                 outline: 'none',
//                 borderBottom: '2px solid #50fa7b',
//                 fontFamily: 'monospace',
//                 padding: '4px 6px',
//                 color: '#50fa7b',
//                  fontWeight: 'bold',
//                  borderBottomColor:"black"


//               }}
//               value={input123}
//               onChange={Direction(e.target.value)}
              
              
//               />
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalNavbar from '../components/NavBar';
import Footer from '../components/Footer';
import './contact.css';

const Contact = () => {
    const [inputValue, setInputValue] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const navigate = useNavigate();

    // List of suggestions for auto-complete
    const autoCompleteValues = ["x.com", "gmail", "linkedin"];

    // Handle input changes and provide auto-complete suggestions
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Find a suggestion that matches the input value
        if (value) {
            const match = autoCompleteValues.find((suggestion) =>
                suggestion.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestion(match ? match : ""); // Set suggestion only if there's a match
        } else {
            setSuggestion(""); // Clear suggestion if input is empty
        }
    };

    // Handle key press to detect "Enter" and "Tab"
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Trigger action based on the input value
            if (inputValue.toLowerCase() === "x.com" || inputValue.toLowerCase() === "x") {
                window.location.href = 'https://x.com/ankitd7_';  // Navigate to X (Twitter)
            } else if (inputValue.toLowerCase() === "gmail") {
                window.location.href = 'mailto:ankit@example.com';
            } else if (inputValue.toLowerCase() === "linkedin") {
                window.location.href = 'https://www.linkedin.com/in/ankitdprofile/';
            }
        } else if (e.key === "Tab" && suggestion) {
            // Auto-fill the suggestion when Tab is pressed
            e.preventDefault(); // Prevent the default tab action
            setInputValue(suggestion); // Fill the input with the suggestion
            setSuggestion(""); // Clear the suggestion once filled
        }
    };

    return (
        <>
            <TerminalNavbar />
            <div className="contact-wrapper">
                <div className="terminal-box-new">
                    {/* Close buttons */}
                    <div className="close-buttons" style={{ marginTop: "2px", marginLeft: "-3px", marginBottom: "10px" }}>
                        <div className="close-button" data-action="minimize"></div>
                        <div className="close-button" data-action="maximize"></div>
                        <div className="close-button" data-action="close"></div>
                    </div>

                    {/* Terminal body */}
                    <div className="terminal-content-new">
                        {/* Terminal command */}
                        <p className="terminal-command-new">
                            <span>ankitdubey@about-station ~ % </span>contact me
                        </p>

                        {/* Links styled like terminal output */}
                        <p className='Links'>
                            <a href="https://www.linkedin.com/in/ankitdprofile/" target="_blank" rel="noopener noreferrer" className="terminal-link-new">
                                LinkedIn
                            </a>
                            <a href="mailto:ankit11akhil@gmail.com" target="_blank" rel="noopener noreferrer" className="terminal-link-new">
                                Gmail
                            </a>
                            <a href="https://x.com/ankitd7_" target="_blank" rel="noopener noreferrer" className="terminal-link-new">
                                X.com
                            </a>
                        </p>

                        {/* Terminal command with input field */}
                        <p className="terminal-command-new">
                            <span>ankitdubey@about-station ~ % </span>cd 
                            <input
                                type="text"
                                className="input-field-new"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyPress}
                                placeholder="Type "
                            />
                        </p>
                        {suggestion && (
                            <p className="autocomplete-suggestion">
                                Press: <strong>Tab</strong> to auto complete
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Footer quote="Communication is the key to success in any relationship. - Unknown" />
        </>
    );
};

export default Contact;
