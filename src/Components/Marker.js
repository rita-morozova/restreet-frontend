import React from 'react'
import {Icon} from 'semantic-ui-react'
import '../App.css'

const Marker = ({ text, tooltip, props }) => {
    
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`)
 
  }

  return(
      <div className="circle" onClick={handleClick}>
        <span className="circleText" title={tooltip}>
          {text}
        </span>
      </div>
  )
    
}

export default Marker