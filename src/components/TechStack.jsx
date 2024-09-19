import React, { useState, useEffect } from 'react';

const TechStack = () => {
  const [typedText, setTypedText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const fullText = "ankitdubey@ad-MacBook-Air ~ % TechStack";

  const logos = [
    { src: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', alt: 'Docker Logo' },
    { src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', alt: 'Git Logo' },
    { src: 'https://cdn-icons-png.freepik.com/256/4248/4248443.png?semt=ais_hybrid', alt: 'SQL Logo' },
    { src: 'https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Blue.png', alt: 'Golang Logo' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', alt: 'Python Logo' },
    { src: 'https://static.djangoproject.com/img/logos/django-logo-negative.png', alt: 'Django Logo' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React Logo' },
  ];

  // Simulate typing effect for the command text
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Simulate logos loading after 1.5 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${now.toDateString()} ${hours}:${minutes}`;
  };

  // Inline styles
  const terminalStyle = {
    backgroundColor: '#000',
    marginTop:"50px",
    borderRadius: '12px',
    
    padding: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    width: windowWidth < 480 ? '90vw' : windowWidth < 768 ? '80vw' : '70vw',
    height: windowWidth < 480 ? '40vh' : windowWidth < 768 ? '50vh' : '60vh',
    font: windowWidth < 480 ? '0.789em' : windowWidth < 768 ? '0.789em':'1.2em',
    color: '#50fa7b',
    margin: '0 auto',
    position: 'relative',
    marginLeft:windowWidth < 480 ? "25px":"180px",
  };

  const logoGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth < 480 ? 'repeat(auto-fit, minmax(50px, 1fr))' : windowWidth < 768 ? 'repeat(auto-fit, minmax(60px, 1fr))' : 'repeat(auto-fit, minmax(80px, 1fr))',
    gap: windowWidth < 480 ? '3px' : windowWidth < 768 ? '10px' : '15px',
    justifyItems: 'center',
    alignItems: 'center',
    marginTop: '20px',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  const logoItemStyle = {
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const logoImageStyle = {
    width: windowWidth < 480 ? '18px' : windowWidth < 768 ? '60px' : '80px',
    height: 'auto',
    
    marginBottom: '5px',
    transition: 'transform 0.3s',
  };

  const closeButtonStyle = (color) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '8px',
  });

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', maxHeight: '80vh', fontFamily: 'Courier, monospace', color: '#333' , marginBottom:"-60px" }}>
      {/* Terminal Content */}
      <div style={terminalStyle}>
        {/* Terminal Header with Close Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', marginRight: 'auto' }}>
            <div style={closeButtonStyle('#f4c20d')}></div>
            <div style={closeButtonStyle('#4caf50')}></div>
            <div style={closeButtonStyle('#d9534f')}></div>
          </div>
        </div>

        {/* Terminal Body with Animated Text */}
        <div style={{ marginBottom: '16px', whiteSpace: 'pre-wrap' }}>
          <p style={{ fontWeight: 'bold', fontSize: windowWidth < 480 ? '0.8rem' : windowWidth < 768 ? '1rem' : '1.2rem', marginBottom: '10px' }}>
            Last login: {getCurrentDateTime()} website
          </p>
          <p style={{ fontWeight: 'bold', fontSize: windowWidth < 480 ? '0.8rem' : windowWidth < 768 ? '1rem' : '1.2rem', margin: '0' }}>
            {typedText.slice(0 , fullText.length-1)}
          </p>
        </div>

        {/* Logo Grid (within terminal) */}
        <div style={logoGridStyle}>
          {logos.map((logo, index) => (
            <div key={index} style={logoItemStyle}>
              <img src={logo.src} alt={logo.alt} style={logoImageStyle} />
              <p style={{ color: '#fff', fontSize: windowWidth < 480 ? '0.6rem' : windowWidth < 768 ? '0.7rem' : '0.8rem', fontWeight: 'bold' }}>
                {logo.alt.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
