import React from 'react'
import './App.css';
import MainContainer from './Containers/MainContainer'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
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

const URL= 'http://localhost:3000'

class App extends React.Component {

  state ={
    user: "",
    token:""
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/arts')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  renderForm = (routerProps) => {
    console.log(routerProps)
    if(routerProps.location.pathname === "/login"){
      return <Form name="Login Form" handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === "/signup"){
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />
    }
  }

  handleLogin = (info) => {
    console.log('login')
    this.handleAuthFetch(info,'http://localhost:3000/login')

  }

  handleSignup = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info,'http://localhost:3000/users')
  }

  render(){
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact path="/login" component={this.renderForm} />
      <Route exact path="/signup" component={this.renderForm} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/adopt-a-wall' component={MainContainer} />
      <Route exact path='/my-walls' component={AdoptedWall} />
      <Route exact path='/get-inspired' component={ArtContainer} />
      <Route exact path='/my-inspiration' component={FavArtContainer} />
      <Route exact path='/learn' component={LearnContainer} />
      <Route component={NotFound} />
      </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
