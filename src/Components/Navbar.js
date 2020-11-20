import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../App.css'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'black',
}

class Navbar extends React.Component {

  render(){
    return(
    <div>
          <NavLink to='/' exact style={link} activeStyle={{background: '#f1f3f3'}}> Home </NavLink>
          <NavLink to='/adopt-a-wall' exact style={link} activeStyle={{background: '#f1f3f3'}}>Adopt a Wall</NavLink>
          <NavLink to='/get-inspired' exact style={link} activeStyle={{background: '#f1f3f3'}}>Get Inspired</NavLink>
          <NavLink to='/my-inspiration' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Inspiration </NavLink>
          <NavLink to='/learn' exact style={link} activeStyle={{background: '#f1f3f3'}}> Learn to Paint </NavLink>
          <NavLink to='/login' exact style={link} activeStyle={{background: '#f1f3f3'}}> Login </NavLink>
       {/* <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
                */}
      </div> 
    )
  }
}

export default Navbar