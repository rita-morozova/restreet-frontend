import React from 'react'
import {Icon} from 'semantic-ui-react'
import '../App.css'

const Marker = ({ text, tooltip }) => (
  <div className="circle">
    <span className="circleText" title={tooltip}>
      {text}
    </span>
  </div>
);

export default Marker