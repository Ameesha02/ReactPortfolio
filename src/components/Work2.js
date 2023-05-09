import "./Work.css"  
import React from 'react'

import { NavLink } from "react-router-dom"
const Work2 = (props) => {
  return (
    <div className="project-card">
         <NavLink to={props.Link}><img src={props.imgsrc} alt="imae"/></NavLink>
    
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns"> 
       
        <NavLink to={props.Link} className="button">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default Work2