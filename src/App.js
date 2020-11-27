import React from 'react'
import './App.css';
import {Route, Switch, withRouter, Redirect, Link} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserProfile from './Components/UserProfile'
import UserListings from './Components/UserListings'
import ArtContainer from './Containers/ArtContainer'
import FavArtContainer from './Containers/FavArtContainer'
import LearnContainer from './Containers/LearnContainer'
import NotFound from './Components/NotFound'
import MapContainer from './Containers/MapContainer'
import PostWall from './Components/PostWall';
import FavVideoContainer from './Containers/FavVideosContainer'
import ArtPhotosContainer from './Containers/ArtPhotosContainer'
import {gql, useQuery} from '@apollo/client'




const URL = 'http://localhost:3000'



class App extends React.Component {
  
  state ={
    user: {arts: [], listings: [], username:'', name:''},
    token:'',
    favorites: [],
    walls: [],
    videos: [],
    favvideos: [],
    listings: [],
    adopted: false,
    playlist: []
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`${URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(user => {
        console.log(user.user)
        this.setState({user: user.user})
      })
    }

    fetch('http://localhost:3000/listings')
    .then(resp => resp.json())
    .then( data => this.setState({listings: data}))

    fetch('http://localhost:3000/videos')
    .then(resp => resp.json())
    .then(data =>this.setState({videos: data}))
  }

   ////////////Handle Login and SignUp 
   renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login handleSubmit={this.handleLogin}/>
    } else if (routerProps.location.pathname === "/signup"){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }
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
    this.setState({error: null})
    fetch(request, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("token", data.token)
      this.setState({user: data.user}, ()  =>{
        //redirects home after login/signup
        this.props.history.push('/') 
      })
    })
    .catch(errors => console.log(errors))
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
      // console.log(data)
      localStorage.setItem("token", data.token)
      this.setState({user: data.user}, ()  =>{
          //redirects home after login/signup
          this.props.history.push('/') 
        }) 
    })
    .catch(errors => console.log(errors))
  }

//////////// Update User Profile
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

  //////// DELETE USER
  deleteUser = () => {
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: 'DELETE'
    })
    this.props.history.push('/')
    localStorage.clear()
    this.setState({user: null})
  }


  ////////////////////// Handle favorite arts
  addToFavorites = (art) => {
    const userToken = localStorage.getItem('token')
    fetch(`${URL}/favorites`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${userToken}`
      },
      body: JSON.stringify(({art_id: art.id}))
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user})
     })
      }
        
  deleteFromFavorites = (art) =>{
    const foundFavorite = this.state.user.favorites.find(favorite => favorite.art_id === art.id)
    fetch(`${URL}/favorites/${foundFavorite.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(resp => resp.json())
    .then(data =>{
      this.setState((prevState) =>({
        user: {...prevState.user, arts: [...prevState.user.arts.filter(userArt => userArt.id !==data.art_id)]}
      })
      )
    })      
  }

  addToList = (video) => {
    const userToken = localStorage.getItem('token')
  
    fetch('http://localhost:3000/favvideos',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${userToken}`
      },
      body: JSON.stringify(({video_id: video.id}))
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // debugger
      this.setState({user:data.user})
      })
      .catch(errors => console.log(errors))
    }

    deleteFromList = (video) =>{
      const foundFavorite = this.state.user.favvideos.find(favorite => favorite.video_id === video.id)
      fetch(`${URL}/favvideos/${foundFavorite.id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
        }
      })
      .then(resp => resp.json())
      .then(data =>{
        // console.log(data)
        this.setState((prevState) =>({
          user: {...prevState.user, videos: [...prevState.user.videos.filter(userVideo => userVideo.id !==data.video_id)]}
        })
        )
      })      
    }

    ///////////////////Handle Wall Listings

    handlePostWall = (listing) => {
      const userToken = localStorage.getItem('token')
      fetch(`${URL}/listings`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${userToken}`
        },
        body: JSON.stringify(({
          lat: listing.lat,
          lng: listing.lng,
          address: listing.address.toString(),
          zipcode: listing.zipcode,
          description: listing.description.toString(),
          photo: listing.photo.toString(),
          user_id: listing.user_id,
          adopted: false
        }))
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState((prevState) =>({
          listings: [...prevState.listings, listing] 
        }))
        })
        this.props.history.push('my-listings')
      }
     

      deleteListing = (listing) =>{
        // const wall = this.state.user.listings.find(wall => wall.id=== listing.id)
        const wall = this.state.listings.filter(l => l.user_id === this.state.user.id)
        const walla= wall.find(w => w.id === listing.id)
        fetch(`${URL}/listings/${walla.id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type':'application/json',
          }
        })
        .then(resp => resp.json())
        .then(data =>{
          console.log(data)
          // this.setState((prevState) =>({
          //   user: {...prevState.user, listings: [...prevState.user.listings.filter(wall => wall.id !==data.id)]}
          // })
          // )
          this.setState((prevState) =>({
            listings: prevState.listings.filter(l => l.id !== walla.id)
          })
          )
        })      
      }

      // handleWallAdoption = (data, route, method='PATCH') => {
      //   fetch(`${URL}${route}`, {
      //       method: method,
      //       headers: {
      //           'Content-Type':'application/json'
      //       },
      //       body: JSON.stringify(data)
      //   })
      //   .then(resp => resp.json())
      //   .then(data => {
      //     this.setState({listings: data})
      //     })
      //   .catch(errors => console.log(errors))
      // }

  render(){
    const {user, videos, listings} = this.state
    // const dynamicArts = (routerProps) => { 
    //   return  <ArtPhotosContainer artId={routerProps.match.params.id} />
    // }
    console.log(listings)
  return (
    <div className="App">
        <Navbar user={user} />
      <Switch>
      <Route exact path='/'  component={() => <Home user={user}/>} />
      <Route exact path='/login' component={this.renderForm} />
      <Route exact path='/signup' component={this.renderForm} />
      <Route exact path='/logout' component={() =>this.handleLogout()} />
      <Route exact path='/profile' component={() => <UserProfile handleUpdateProfile={this.handleUpdateProfile} user={user}  deleteUser={this.deleteUser}/>} />
      <Route exact path='/adopt-a-wall' component={() => <MapContainer listings={listings} user={user} handlePostWall={this.handlePostWall}/>} />
      <Route exact path='/my-listings' component={() => <UserListings listings={listings.filter(l => l.user_id === user.id)} deleteListing={this.deleteListing} />} />
      <Route exact path='/my-library' component={() => <FavVideoContainer videos={user.videos} deleteFromList={this.deleteFromList}/>} />
      <Route exact path='/post-wall' component={() => <PostWall handlePostWall={this.handlePostWall} user={user}/>} />
      <Route exact path='/get-inspired' component={() => <ArtContainer addToFavorites={this.addToFavorites} />} />
      {/* <Route path='/get-inspired/:id' render={dynamicArts} /> */}
      <Route exact path='/my-inspiration' component={() =><FavArtContainer userArts={user.arts} deleteFromFavorites={this.deleteFromFavorites}/>} />
      <Route exact path='/learn' component={() => <LearnContainer user={user} videos={videos} addToList={this.addToList} />} />
      <Route component={NotFound} />
      </Switch>
    </div>
  );
  }
}

export default withRouter(App);
