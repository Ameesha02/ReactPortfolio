import "./Footer.css"
 import React from 'react'
 import {FaHome,FaMailBulk,FaPhone,FaTwitter,FaLinkedin, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
 
 const Footer = () => {
   return (
 <div className="footer">
 <div className="footer-container">
          <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            
           <div> <p>Bhopal</p>
            <p>India</p></div> </div>
            <div className="phone">
               <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/></h4>
            </div>
            <div className="email">
            <Link to="mailto:ameeshapatel105@gmail.com"> <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>ameeshapatel105@gmail.com</h4></Link> 
            </div>
            
            </div>
          <div className="right">
            <h4>Connect with</h4>
            <p>I love connecting with like-minded people and building meaningful relationships.Let's connect and see what we can achieve together.</p>
            <div className="social">
             
             <Link to="https://github.com/Ameesha02"> <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <Link to="https://www.linkedin.com/in/ameesha-patel-4818a6220"> <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
            </div>
            </div> 
        </div>
       
     </div>
   )
 }
 
 export default Footer
 