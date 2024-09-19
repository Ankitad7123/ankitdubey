import React from 'react';
import './Footer.css';

const Footer = ({quote}) => {
  return (
    <footer className="footer">
     
       
          
            

       
        <h2 className="mantra">
            {quote}
          </h2>
   
    </footer>
  );
};

export default Footer;
