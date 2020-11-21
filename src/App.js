import React from 'react'
import './App.css';
import MainContainer from './Containers/MainContainer'
import {Route, Switch, withRouter, Redirect, Link} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserProfile from './Components/UserProfile'
import AdoptedWall from './Components/AdoptedWalls'
import ArtContainer from './Containers/ArtContainer'
import FavArtContainer from './Containers/FavArtContainer'
import LearnContainer from './Containers/LearnContainer'
import NotFound from './Components/NotFound'


const URL = 'http://localhost:3000'



class App extends React.Component {

  state ={
    user: '',
    token:'',
    favorites: [],
  }

  //username={this.state.user.username} insert in home for testing

  handleHome = () => <Home username={this.state.user.username} />



  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }

  //Remove console.logs after testing
  handleLogin = (info) => {
    console.log('login')
    console.log(info)
    this.handleAuthFetch(info,'http://localhost:3000/login')

  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleSignupFetch(info,'http://localhost:3000/users')
  }

  handleAuthFetch = (info, request) => {  
    fetch(request, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, token: data.token}, ()  =>{
        //redirects home after login/signup
        this.props.history.push('/') 
      }
        )
    })
  }

  handleSignupFetch = (info, request) => {  
    fetch(request, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
        username: info.username,
        password: info.password,
        email: info.email
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, token: data.token}, ()  =>{
        //redirects home after login/signup here
        // debugger
        // this.props.history.push('/') 
      }
        )
    })
  }

  addToFavorites = (art) => {

    fetch('http://localhost:3000/favorites',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${this.state.token}`
      },
      body: JSON.stringify(({art_id: art.id}))
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user:data.user})
     })
      }
   

  deleteFromFavorites = (art) =>{
    // const foundFavorite = this.state.user.arts.find(favorite => favorite.id === art.id)
    
    fetch(`${URL}/favorites/${art.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        'Authorization' : `Bearer ${this.state.token}`
      }
    })
    .then(resp => resp.json())
    .then(data =>{
      this.setState({user:data.user})
      console.log(data)
    })
  }

  handleAllPaintings = () =>  <ArtContainer addToFavorites={this.addToFavorites}  />
  // handleUserFavorites = () => <FavArtContainer userArts={this.state.user.arts} /> 

  handleLogout = () => {
    this.setState({user: null, token: null})
    this.props.history.push('/') 
  }


  render(){
  return (
    <div className="App">
        <Navbar />
      <Switch>
      <Route exact path='/'  component={this.handleHome} />
      <Route exact path='/login' component={this.renderForm} />
      <Route exact path='/signup' component={this.renderForm} />
      <Route exact path='/logout' component={() =>this.handleLogout()} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/adopt-a-wall' component={MainContainer} />
      <Route exact path='/my-walls' component={AdoptedWall} />
      <Route exact path='/get-inspired' component={this.handleAllPaintings} />
  <Route exact path='/my-inspiration' component={() =><FavArtContainer userArts={this.state.user.arts} deleteFromFavorites={this.deleteFromFavorites}/>} />
      <Route exact path='/learn' component={LearnContainer} />
      <Route component={NotFound} />
      </Switch>
    </div>
  );
  }
}

export default withRouter(App);
