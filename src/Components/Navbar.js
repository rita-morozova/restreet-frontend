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

const Navbar =({user})=> {

    return(
    <div>
          <NavLink to='/' exact style={link} activeStyle={{background: '#f1f3f3'}}> Home </NavLink>
          {user ? 
          <>
          <NavLink to='/adopt-a-wall' exact style={link} activeStyle={{background: '#f1f3f3'}}>Adopt a Wall</NavLink>
          <NavLink to='/get-inspired' exact style={link} activeStyle={{background: '#f1f3f3'}}>Get Inspired</NavLink>
          <NavLink to='/my-inspiration' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Inspiration </NavLink>
          <NavLink to='/learn' exact style={link} activeStyle={{background: '#f1f3f3'}}> Learn to Paint </NavLink>
          <NavLink to='/my-library' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Library </NavLink>
          {/* <NavLink to='/my-walls' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Walls </NavLink> */}
          <NavLink to='/profile' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Profile </NavLink>
          <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
          </>
          :
          <>
          <NavLink to='/login' exact style={link} activeStyle={{background: '#f1f3f3'}}> Login </NavLink>
          <NavLink to='/signup' exact style={link} activeStyle={{background: '#f1f3f3'}}>Signup</NavLink> 
          </>
          }      
      </div> 
    )
}

export default Navbar