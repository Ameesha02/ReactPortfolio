 import "./AboutContent.css"
//  import "./Footer"
 import React from 'react'
// import { Link } from "react-router-dom"
import prj1 from"../assest/prj1.png"
import prj2 from"../assest/prj2.png"
 
 const AboutContent = () => {
   return (
     <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>As a frontend developer and programmer with expertise in C++, Java, and Python, I specialize in creating user interfaces for web applications and software programs. I am proficient in using HTML, CSS, JavaScript and Framework like React and Bootstrap ,to build responsive and intuitive interfaces that provide an excellent user experience.</p>
            {/* <Link to="/Footer"><button className="button">Contact</button></Link> */}
        </div>
        <div className="right">
           <div className="img-container">
            <div className="image-stack top">
                <img src={prj1} className="img" alt="true"/></div>
                
                <div className="image-stack bottom">
                <img src={prj2} className="img" alt="true"/></div>
                
                
                
                </div> 
        </div>
        
     </div>
   )
 }
 
 export default AboutContent
 