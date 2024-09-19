// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const WebSocketChat = () => {
//   const [username, setUsername] = useState(''); // Username for both login and create
//   const [password, setPassword] = useState(''); // Password for both login and create
//   const [email, setEmail] = useState(''); // Email for user creation
//   const [loggedIn, setLoggedIn] = useState(false); // User login status
//   const [messages, setMessages] = useState([]); // Chat messages
//   const [inputMessage, setInputMessage] = useState(''); // Chat input field
//   const websocket = useRef(null); // WebSocket reference

//   const user2 = 'Ankit'; // Hardcoded second user (You)

//   // Check for login status in local storage on mount
//   useEffect(() => {
//     const savedUser = localStorage.getItem('username');
//     if (savedUser) {
//       setUsername(savedUser);
//       setLoggedIn(true);
//     }
//   }, []);

//   // WebSocket connection and fetch previous messages after login
//   useEffect(() => {
//     if (loggedIn) {
//       const wsUrl = `ws://localhost:8080/ws?user1=${username}&user2=${user2}`;
//       websocket.current = new WebSocket(wsUrl);

//       websocket.current.onmessage = (event) => {
//         const newMessage = JSON.parse(event.data);
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//         console.log(newMessage)
//       };

//       websocket.current.onclose = () => {
//         console.log('WebSocket connection closed');
//       };

//       // Fetch previous messages when WebSocket is connected
//       axios
//         .get(`http://localhost:8080/msgs/${messages.room}`)
//         .then((res) => {
//           setMessages(res.data.msg);
//           console.log(res.data.msg)
//         })
//         .catch((err) => console.error("Error fetching messages", err));

//       return () => {
//         websocket.current.close();
//       };
//     }
//   }, [loggedIn, username, user2]);

//   // Send message to WebSocket
//   const sendMessage = () => {
//     const message = {
//       username,
//       message: inputMessage,
//       room: `${username}_${user2}`,
//     };
//     websocket.current.send(JSON.stringify(message));
//     setInputMessage('');
//   };

//   // Register new user
//   const handleRegister = () => {
//     const newUser = {
//       username,
//       password,
//       email, // Include email for registration
//     };
//     axios
//       .post('http://localhost:8080/', newUser)
//       .then((res) => {
//         if (res.data === "created") {
//           alert('User created successfully!');
//           handleLogin(); // Automatically log in after registration
//         }
//       })
//       .catch((err) => console.error("Error registering", err));
//   };

//   // Handle login
//   const handleLogin = () => {
//     const user = {
//       username,
//       password,
//     };
//     axios
//       .post('http://localhost:8080/login', user)
//       .then((res) => {
//         alert('Login successful!');
//         setLoggedIn(true);
//         localStorage.setItem('username', username); // Save login info to local storage
//       })
//       .catch((err) => console.error("Error logging in", err));
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('username'); // Remove login info from local storage
//     setLoggedIn(false);
//     setUsername('');
//     setPassword('');
//     setEmail('');
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2>WebSocket Chat App</h2>

//       {/* Show login or register options if not logged in */}
//       {!loggedIn && (
//         <div>
//           <h3>Login or Create Account</h3>

//           {/* Create Account Section */}
//           <div style={{ marginBottom: '20px' }}>
//             <h4>Create Account</h4>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//               style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: '200px' }}
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: '200px' }}
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: '200px' }}
//             />
//             <button
//               onClick={handleRegister}
//               style={{ padding: '10px', margin: '5px', backgroundColor: 'lightblue', borderRadius: '5px' }}
//             >
//               Create Account
//             </button>
//           </div>

//           {/* Login Section */}
//           <div>
//             <h4>Login</h4>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//               style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: '200px' }}
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: '200px' }}
//             />
//             <button
//               onClick={handleLogin}
//               style={{ padding: '10px', margin: '5px', backgroundColor: 'lightgreen', borderRadius: '5px' }}
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Show the chat window and logout button if logged in */}
//       {loggedIn && (
//         <div>
//           <h3>Welcome, {username}! Chat with {user2}</h3>
//           <button
//             onClick={handleLogout}
//             style={{ padding: '10px', margin: '5px', backgroundColor: 'lightcoral', borderRadius: '5px' }}
//           >
//             Logout
//           </button>

//           {/* Chat Window */}
//           <div
//             style={{
//               height: '200px',
//               width: '400px',
//               border: '1px solid gray',
//               overflowY: 'scroll',
//               padding: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             {messages.map((msg, index) => (
//               <div key={index} style={{ marginLeft: msg.username === user2 ? '290px' : '0px' }}>
//                 <strong>{msg.username}:</strong> {msg.message}
//               </div>
//             ))}
//           </div>

//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Type a message"
//             style={{ padding: '10px', width: '300px', borderRadius: '5px', marginRight: '5px' }}
//           />
//           <button
//             onClick={sendMessage}
//             style={{ padding: '10px', backgroundColor: 'lightblue', borderRadius: '5px' }}
//           >
//             Send
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WebSocketChat;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TerminalNavbar from '../components/NavBar';

const WebSocketChat = () => {
   const [username, setUsername] = useState(''); // Username for both login and create
  const [password, setPassword] = useState(''); // Password for both login and create
  const [email, setEmail] = useState(''); 
  const [loggedIn, setLoggedIn] = useState(false); // User login status
  const [messages, setMessages] = useState([]); // Chat messages
  const [inputMessage, setInputMessage] = useState(''); // Chat input field
  const websocket = useRef(null); // WebSocket reference
  const lastMessageRef = useRef(null); 
  const user2 = 'Ankit'; // Hardcoded second user (You)

  // Check for login status in local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
      setLoggedIn(true);
    }
  }, []);

  // WebSocket connection and fetch previous messages after login
  useEffect(() => {
    if (loggedIn) {
      const wsUrl = `ws://localhost:8080/ws?user1=${username}&user2=${user2}`;
      websocket.current = new WebSocket(wsUrl);

      websocket.current.onmessage = (event) => {
        const newMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log("newmesage" , newMessage)
       
       
  
      };

      websocket.current.onclose = () => {
        console.log('WebSocket connection closed');
      };

      // Fetch previous messages when WebSocket is connected
      axios
        .get(`http://localhost:8080/msgs/${user2}_${username}`)
        .then((res) => {
          setMessages(res.data.msg);
          console.log("===> ress" , res.data.msg )
        })
        .catch((err) => console.error("Error fetching messages", err));
      
       

      return () => {
        websocket.current.close();
      };
    }
  }, [loggedIn, username, user2 ]);

 
    useEffect(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);
    


  // Send message to WebSocket
  const sendMessage = () => {
    const message = {
      username,
      message: inputMessage,
      room: `${user2}_${username}`,
    };
    websocket.current.send(JSON.stringify(message));
    setInputMessage('');
  };

  // Register new user
  const handleRegister = () => {
    const newUser = {
      username,
      password,
      email, // Include email for registration
    };
    axios
      .post('http://localhost:8080/', newUser)
      .then((res) => {
        if (res.data === "created") {
          alert('User created successfully!');
          handleLogin(); // Automatically log in after registration
        }
      })
      .catch((err) => console.error("Error registering", err));
  };

  // Handle login
  const handleLogin = () => {
    const user = {
      username,
      password,
    };
    axios
      .post('http://localhost:8080/login', user)
      .then((res) => {
        alert('Login successful!');
        setLoggedIn(true);
        localStorage.setItem('username', username); // Save login info to local storage
      })
      .catch((err) => console.error("Error logging in", err));
  };


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('username'); // Remove login info from local storage
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setEmail('');
  };
  return (
    <>
    <TerminalNavbar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>ChatHub</h2>

      {!loggedIn && (
        <>
  
        <div style={styles.CardWhole}>
          

          <div style={styles.card}>
            <h4 style={styles.sectionTitle}>Create_Account()</h4>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={styles.input}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={styles.input}
            />
            <button onClick={handleRegister} style={styles.createButton}>
              func CreateAccount()
            </button>
          </div>

          <div style={styles.card12}>
            <h4 style={styles.sectionTitle}> Login()</h4>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={styles.input}
            />
            <button onClick={handleLogin} style={styles.loginButton}>
              func Login()
            </button>
          </div>
        </div>
        </>
      )}

      {loggedIn && (
        <div style={styles.chatContainer}>
           <a onClick={handleLogout} style={styles.logoutButton}>
            func Logout()
          </a>
         

          <div style={styles.chatBox}>
            {messages.length === 0 ? (
              <p>No messages yet. Start the conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div id="chat-feed" key={index} style={msg.username === user2 ? styles.messageRight : styles.messageLeft}>
                  <strong>{msg.username}: </strong> {msg.message}
                  <div ref={lastMessageRef}/>
                </div>
                
              ))
              
            )}
            
          </div>


          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            style={styles.chatInput}
          />
          <button onClick={sendMessage} style={styles.sendButton}>
            Send
          </button>
        </div>
      )}
    </div>
    </>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9fb',
    height: '100vh',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #f0f0f3, #ffffff)',
  },
  CardWhole:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    padding:"60px"
    


  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    marginTop: '-40px',
    fontWeight: '700',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
    fontWeight: '400',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    height:"350px",
    fontFamily:"monospace",
    fontSize:"1.2rem",
    fontWeight:"larger"

  },
  card12: {
    backgroundColor: '#fff',
    padding: '30px',

    borderRadius: '12px',
    padding:"80px",
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    marginLeft:"40px",
    height:"350px",
    fontFamily:"monospace",
    fontSize:"1.2rem",
    fontWeight:"larger"
  },
  sectionTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    fontWeight: '500',
    color: '#444',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    width: '280px',
    borderRadius: '25px',
    border: '1px solid #ddd',
    outline: 'none',
    boxShadow: 'inset 3px 3px 8px rgba(0, 0, 0, 0.05), inset -3px -3px 8px rgba(255, 255, 255, 1)',
    fontSize: '1rem',
  },
  createButton: {
    padding: '12px 28px',
    backgroundColor: '#6c5ce7',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
   marginTop:"10px",
    boxShadow: '0 4px 8px rgba(108, 92, 231, 0.3)',
    fontFamily:"monospace",
    fontSize:"1.0rem",
    fontWeight:"larger"
  },
  loginButton: {
    padding: '12px 28px',
    backgroundColor: '#0984e3',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop:"10px",
    boxShadow: '0 4px 8px rgba(9, 132, 227, 0.3)',
    fontFamily:"monospace",
    fontSize:"1.0rem",
    fontWeight:"larger"
  },
  createButtonHover: {
    '&:hover': {
      backgroundColor: '#7158e2',
    },
  },
  loginButtonHover: {
    '&:hover': {
      backgroundColor: '#74b9ff',
    },
  },
  chatContainer: {
    textAlign: 'center',
  },
  welcome: {
    fontSize: '1.8rem',
    color: '#2d3436',
    fontWeight: '600',
    marginBottom: '20px',
  },
  logoutButton: {
    position: 'absolute',
    display: 'flex',
    padding: '10px 20px',
    color: 'red',
    fontFamily: 'monospace',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginLeft: '680px',
    top: '33px',
    fontSize: '1.3em',
    fontWeight: '900',
  },
  chatBox: {
    height: '420px',
    width: '450px',
    backgroundColor: '#fff',
    overflowY: "auto",
    padding: '15px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    
  },
  messageLeft: {
    textAlign: 'left',
    padding: '8px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: 'white',
    fontFamily: 'monospace',
  },
  messageRight: {
    textAlign: 'right',
    padding: '8px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: 'white',
    fontFamily: 'monospace',
  },
  chatInput: {
    padding: '12px',
    margin: '10px 0',
    width: '300px',
    borderRadius: '25px',
    border: '1px solid #ccc',
  },
  sendButton: {
    padding: '12px 24px',
    backgroundColor: '#00b894',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 8px rgba(0, 184, 148, 0.3)',
  },
};

export default WebSocketChat;
