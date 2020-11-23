import React from 'react'
import './App.css';
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
import API from './Adapters/API'
import AdoptedWalls from './Components/AdoptedWalls';
import MapContainer from './Containers/MapContainer'



const URL = 'http://localhost:3000'



class App extends React.Component {

  state ={
    user: '',
    token:'',
    favorites: [],
    walls: [],
   
  
  }

  //username={this.state.user.username} insert in home for testing

  // handleHome = () => <Home username={this.state.user.username} />


  //Login and SignUp forms
  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }
  componentDidMount(){

  }

  // componentDidMount() {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     fetch(`${URL}/profile`, {
  //       headers: {
  //         "Authentication": `Bearer ${this.state.token}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(user => {
  //       this.setState({user: user})
  //     })
  //   }
  // }

  //Remove console.logs after testing
  handleLogin = (info) => {
    console.log('login')
    console.log(info)
    this.handleAuthFetch(info,`${URL}/login`)

  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleSignupFetch(info,`${URL}/users`)
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
      this.setState({user: data.user})
      localStorage.setItem("token", data.token)
        //redirects home after login/signup here
        return <Redirect to="/login" push={true} />
        // this.props.history.push('/')  
    })
  }

  handleUpdateProfile = (data, route, method='PATCH') => {
    fetch(`${URL}${route}`, {
        method: method,
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({user: data.user, token: data.token})
      })
    .catch(errors => console.log(errors))
  }

  

  handleLogout = (user) => {
    localStorage.removeItem('token')
    this.setState({user: user})
    return <Redirect to="/" push={true} />
  }

  addToFavorites = (art) => {
    fetch(`${URL}/favorites`,{
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
    const foundFavorite = this.state.user.favorites.find(favorite => favorite.art_id === art.id)
    fetch(`${URL}/favorites/${foundFavorite.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        // 'Authorization' : `Bearer ${this.state.token}`
      }
    })
    .then(resp => resp.json())
    .then(data =>{
      // this.setState({user:data.user})
      console.log(data)
      this.setState({
        user: this.state.user.arts.filter(userArt => userArt.art_id !== data.art_id)
        // user: this.state.user.arts.filter(userArt => userArt.id !== data.art_id)
      })
    })  
  }

  adoptWall = (wall) => {
    fetch(`${URL}/walls`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${this.state.token}`
      },
      body: JSON.stringify(({wall_id: wall.id}))
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user:data.user})
     })
      }

  render(){
    const {user, walls} = this.state
    // console.log(user.favorites)
  return (
    <div className="App">
        <Navbar user={user} />
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact path='/login' component={this.renderForm} />
      <Route exact path='/signup' component={this.renderForm} />
      <Route exact path='/logout' component={() =>this.handleLogout()} />
      <Route exact path='/profile' component={() => <UserProfile handleUpdateProfile={this.handleUpdateProfile} user={user} />} />
      <Route exact path='/adopt-a-wall' component={() => <MapContainer adoptWall={this.adoptWall} />} />
      <Route exact path='/my-walls' component={() => <AdoptedWalls walls={walls} />} />
      <Route exact path='/get-inspired' component={() => <ArtContainer addToFavorites={this.addToFavorites} />} />
      <Route exact path='/my-inspiration' component={() =><FavArtContainer userArts={user.arts} deleteFromFavorites={this.deleteFromFavorites}/>} />
      <Route exact path='/learn' component={LearnContainer} />
      <Route component={NotFound} />
      </Switch>
    </div>
  );
  }
}

export default withRouter(App);
