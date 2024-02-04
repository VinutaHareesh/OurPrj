import React from "react";
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => 
<footer className="bg-dark text-white text-center py-3">
<div className="container">
  <div className="row">
    <div className="col">
       <div className="row mt-2">
        Join your Hand  
        </div>
        <div className="row mt-2">
         Donate and Help Poor 
        </div>
    </div>
    <div className="col">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FaTwitter size={24} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FaFacebook size={24} />
      </a>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col">
      <p>© 2024 Keshav Foundation. All rights reserved.</p>
    </div>
  </div>
</div>
</footer>

export default Footer;