import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Icon, Grid, Menu} from 'semantic-ui-react'
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
        <Grid padded className='tablet computer only'>
           <Menu borderless fluid size='large'>
           {/* <Link to='/'><Menu.Item header>IPLANT<Icon name='heart' color='red' size='small' /></Menu.Item></Link> */}
          <NavLink to='/' exact style={link} activeStyle={{background: '#f1f3f3'}}> Home </NavLink>
          {user ? 
          <>
          <NavLink to='/find-a-wall' exact style={link} activeStyle={{background: '#f1f3f3'}}>Find a Wall</NavLink>
          <NavLink to='/get-inspired' exact style={link} activeStyle={{background: '#f1f3f3'}}>Get Inspired</NavLink>
          <NavLink to='/my-inspiration' exact style={link} activeStyle={{background: '#f1f3f3'}}> My Inspiration </NavLink>
          <NavLink to='/learn' exact style={link} activeStyle={{background: '#f1f3f3'}}> Learn to Paint </NavLink>
          <NavLink to='/my-library' exact style={link} activeStyle={{background: '#f1f3f3'}}> Library </NavLink>
          <NavLink to='/my-listings' exact style={link} activeStyle={{background: '#f1f3f3'}}> Listings </NavLink>
          <NavLink to='/share' exact style={link} activeStyle={{background: '#f1f3f3'}}> Share Art </NavLink>
          <Menu.Menu position='right'>
          <NavLink to='/profile' exact style={link} activeStyle={{background: '#f1f3f3'}}> Profile </NavLink>
          <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
          </Menu.Menu> 
          </>
          :
          <>
          <Menu.Menu position='right'>
          <NavLink to='/login' exact style={link} activeStyle={{background: '#f1f3f3'}}> Login </NavLink>
          <NavLink to='/signup' exact style={link} activeStyle={{background: '#f1f3f3'}}>Signup</NavLink> 
          </Menu.Menu>
          </>
          }
           </Menu>
       </Grid>      
      </div> 
    )
}

export default Navbar