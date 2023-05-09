import "./Work.css"  
import Work2 from "./Work2"
import Workdata from './Workdata'
import React from 'react'


const Work = () => {
  return (
    <div className="work-container"><h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {Workdata.map((val,ind)=>{
        return(
            <Work2
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            Link={val.Link}
             />
        )
      })}
    </div>
      
    </div>
  )
}

export default Work

