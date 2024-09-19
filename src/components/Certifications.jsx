import React, { useState } from 'react';
import './Certifications.css'; 
import Footer from './Footer';



const About = () => {
  const [isEducationVisible, setIsEducationVisible] = useState(true);
 

  const certifications = [
    {
      logo: <img style={{height:"60px" , margin:"30px"}}  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />,
      title: 'Introduction to Git and GitHub',
      issued: 'Sep 2024',
      skills: ['Git', 'GitHub', 'Version Control'],
      credentialLink: 'https://www.google.com',
    },
    {
      logo: <img style={{height:"60px" , margin:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86kDWkquaiBSCj1nHaJTsCTNlVPH0GR4H2w&s" alt="Meta" />,
      title: 'Advanced React - Meta Front-End Developer Professional Certificate',
      issued: 'Aug 2024',
      skills: ['React.js', 'Front-End Development'],
      credentialLink: 'https://www.meta.com',
    },
    {
      logo: <img style={{height:"80px" , margin:"30px"}} src="https://cdn.worldvectorlogo.com/logos/udemy-3.svg" alt="Udemy" />,
      title: 'Complete Python Bootcamp',
      issued: 'Date not specified',
      credentialId: 'UC-229379a1-2c6e-48ea-a04a-b20c4f9db30c',
      skills: ['Python'],
      credentialLink: 'https://www.udemy.com',
    },
    {
      logo: <img style={{height:"60px" , margin:"30px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-pgm3iaiF6uN7eqTNoKvZUnTB5ZLD55-Nw&s" alt="Docker" />,
      title: 'Journey into Docker: A Beginner\'s Guide',
      issued: 'Date not specified',
      credentialId: '7044429',
      skills: ['Docker'],
      credentialLink: 'https://www.docker.com',
    },
  ];

  const internships = [
    {
      logo:  <img style={{height:"60px" , margin:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0HLiffPw0HWJ0sR3bLLJNVfBFCnJXLjMOg&s" alt="XIRCLS" />,
      title: 'Python Developer (Django Backend Developer)',
      company: 'XIRCLS',
      period: 'Apr 2024 - Jun 2024',
      location: 'Mumbai, Maharashtra, India',
      responsibilities: [
        'Developed a Scheduling Application using Django.',
        'Designed and implemented a centralized MySQL database.',
        'Worked with Shopify for e-commerce integration.',
        'Contributed to a referral project and prepared documentation.',
      ],
      certificate: 'https://www.example.com',
    },
  ];

  return (
    <div className='ftrc'>
    <div className={`flip-container ${isEducationVisible ? '' : 'flip'}`}>
      <div className="flipper">
      
        {/* Front Side: Education */}
        <div className="front">
          <div className="content" id="education">
            <h2>My Education</h2>
            <div className="education-card">
              <img src="https://i.pinimg.com/736x/d6/65/e5/d665e50b550a165d870d3ad8bbcfe592.jpg" alt="Education" className="education-image" />
              <div className="education-details">
                <h3>Atharva College of Engineering</h3>
                <p className="highlight">University of Mumbai</p>
                <p>Bachelor of Engineering in Computer Science</p>
                <p>2019 - 2023</p>
              </div>
            </div>
            <div className="education-card">
              <img src="https://iaqs.in/wp-content/uploads/2021/06/patkar-logo.png" style={{zoom:"200px" , height:"208px"}} alt="Education" className="education-image" />
              <div className="education-details">
                <h3>Patekar College</h3>
                <p>11th & 12th HSC, Maharashtra Board</p>
                <p>2017 - 2019</p>
              </div>
            </div>
          </div>
         
  
              {internships.map((intern, index) => (
                
                <div className="internship-card" key={index}>
                  
                  <div className="intern-logo">{intern.logo}</div>
                  <div className="intern-details">
                     <h3>Internship</h3>
                    <h3>{intern.title}</h3>
                    <p><strong>Company:</strong> {intern.company}</p>
                    <p><strong>Period:</strong> {intern.period}</p>
                    <p><strong>Location:</strong> {intern.location}</p>
                    <ul>
                      {intern.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                   
                    <a className="certificate-link" href={intern.certificate} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
          <button onClick={() => setIsEducationVisible(false)}>Show Certifications</button>
         
        </div>

        {/* Back Side: Certifications */}
        <div className="back">
          <div className="content">
            <h2>My Certifications </h2>
            <div className="certification-list">
              {certifications.map((cert, index) => (
                <div className="certification-card" key={index}>
                  <div className="cert-logo">{cert.logo}</div>
                  <div className="cert-details">
                    <h3>{cert.title}</h3>
                    <p><strong>Issued:</strong> {cert.issued}</p>
                    {cert.credentialId && <p><strong>Credential ID:</strong> {cert.credentialId}</p>}
                    <p><strong>Skills:</strong> {cert.skills.join(', ')}</p>
                    <a className="credential-link" href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                      Show Credential
                    </a>
                  </div>
                </div>
              ))}

              {/* Displaying internships under certifications */}
             
            </div>
          </div>
          <a id="btn" onClick={() => {setIsEducationVisible(true)}} href="/#education">Show Education</a>
      
        </div>
      

      </div>
     
     

    </div>
   
   

   
   
    </div>
  );
};

export default About;
