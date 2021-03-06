import React from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import UserListings from "./Components/UserListings";
import ArtContainer from "./Containers/ArtContainer";
import FavArtContainer from "./Containers/FavArtContainer";
import LearnContainer from "./Containers/LearnContainer";
import NotFound from "./Components/NotFound";
import MapContainer from "./Containers/MapContainer";
import PostWall from "./Components/PostWall";
import FavVideoContainer from "./Containers/FavVideosContainer";
import PhotosContainer from "./Containers/PhotosContainer";


const URL = "https://re-street.herokuapp.com";
const token = localStorage.getItem("token");

class App extends React.Component {
  state = {
    user: { arts: [], listings: [], username: "", name: "" },
    token: "",
    favorites: [],
    videos: [],
    favvideos: [],
    listings: [],
    adopted: false,
    selectedVideo: null,
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchListings();
    this.fetchVideos();
  }

  ////Find User Profile
  fetchUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${URL}/profile`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          this.setState({ user: user.user });
        });
    }
  };

  //////Find All Listings to Display Them on the Map
  fetchListings = () => {
    fetch(`${URL}/listings`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ listings: data }));
  };

  ///Find All Videos to Display Them in Learn Section
  fetchVideos = () => {
    fetch(`${URL}/videos`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ videos: data }));
  };

  ////////////Handle Login and SignUp
  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login") {
      return <Login handleSubmit={this.handleLogin} />;
    } else if (routerProps.location.pathname === "/signup") {
      return <Signup handleSubmit={this.handleSignup} />;
    }
  };

  handleLogin = (info) => {
    this.handleAuthFetch(info, `${URL}/login`);
  };

  handleSignup = (info) => {
    this.handleSignupFetch(info, `${URL}/users`);
  };

  handleAuthFetch = (info, request) => {
    fetch(request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Accept": "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw Error(data.error);
        localStorage.setItem("token", data.token);
        this.setState({ user: data.user }, () => {
          //redirects home after login/signup
          this.props.history.push("/");
        });
      })
      .catch((errors) => alert(errors));
  };

  handleSignupFetch = (info, request) => {
    fetch(request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: info.username,
          password: info.password,
          email: info.email,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw Error(data.error);
        localStorage.setItem("token", data.token);
        this.setState({ user: data.user }, () => {
          //redirects home after login/signup
          this.props.history.push("/");
        });
      })
      .catch((error) => alert(error));
  };

  //////////// Update User Profile
  handleUpdateProfile = (data, route, method = "PATCH") => {
    fetch(`${URL}${route}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ user: data.user, token: data.token });
      })
      .catch((errors) => console.log(errors));
  };

  handleLogout = (user) => {
    localStorage.removeItem("token");
    this.setState({ user: user });
    return <Redirect to="/" push={true} />;
  };

  //////// DELETE USER
  deleteUser = () => {
    fetch(`https://re-street.herokuapp.com/users/${this.state.user.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    this.props.history.push("/");
    localStorage.clear();
    this.setState({ user: '' });
  };

  ////////////////////// Handle favorite arts
  addToFavorites = (art) => {
    const token = localStorage.getItem("token");
    fetch(`${URL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ art_id: art.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data.user });
      });
  };

  deleteFromFavorites = (art) => {
    const foundFavorite = this.state.user.favorites.find(
      (favorite) => favorite.art_id === art.id
    );
    fetch(`${URL}/favorites/${foundFavorite.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            arts: [
              ...prevState.user.arts.filter(
                (userArt) => userArt.id !== data.art_id
              ),
            ],
          },
        }));
      });
  };

  /////////HANDLE VIDEOS
  addToList = (video) => {
    const token = localStorage.getItem("token");
    fetch("https://re-street.herokuapp.com/favvideos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ video_id: video.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        // debugger
        this.setState({ user: data.user });
      })
      .catch((errors) => console.log(errors));
  };

  deleteFromList = (video) => {
    const foundFavorite = this.state.user.favvideos.find(
      (favorite) => favorite.video_id === video.id
    );
    fetch(`${URL}/favvideos/${foundFavorite.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            videos: [
              ...prevState.user.videos.filter(
                (userVideo) => userVideo.id !== data.video_id
              ),
            ],
          },
        }));
      });
  };

  ///////////////////Handle Wall Listings

  handlePostWall = (listing) => {
    fetch(`${URL}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        lat: listing.lat,
        lng: listing.lng,
        address: listing.address.toString(),
        zipcode: listing.zipcode,
        description: listing.description.toString(),
        photo: listing.photo.toString(),
        user_id: listing.user_id,
        adopted: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          listings: [...prevState.listings, data],
        }));
      });
    this.props.history.push("find-a-wall");
  };

  deleteListing = (listing) => {
    const wall = this.state.listings.filter(
      (l) => l.user_id === this.state.user.id
    );
    const walla = wall.find((w) => w.id === listing.id);
    fetch(`${URL}/listings/${walla.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          listings: prevState.listings.filter((l) => l.id !== walla.id),
        }));
      });
  };

  /////////////IF THE WALL WAS RESERVED FOR AN ARTIST - TAKE THE OFFER OFF THE MAP
  handleWallAdoption = (wall) => {
    fetch(`${URL}/listings/${wall.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ adopted: true }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          listings: [
            ...prevState.listings.filter((l) => l.id !== data.id),
            data,
          ],
        }));
      });
    this.props.history.push("find-a-wall");
  };

  /////MAKE THE LISTING AVAILABLE FOR ARTISTS AGAIN
  handleListAgain = (wall) => {
    fetch(`${URL}/listings/${wall.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ adopted: false }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState((prevState) => ({
          listings: [
            ...prevState.listings.filter((l) => l.id !== data.id),
            data,
          ],
        }));
      });
    this.props.history.push("find-a-wall");
  };

  selectVideo = (id) => {
    this.setState({
      selectedVideo: this.state.videos.find((video) => video.id === id),
    });
  };

  goBackToAllVideos = () => {
    this.setState({
      selectedVideo: null,
    });
  };

  render() {
    const { user, videos, listings, selectedVideo } = this.state;
    console.log(this.state.user)
    return (
      <div className="App">
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/login" component={this.renderForm} />
          <Route exact path="/signup" component={this.renderForm} />
          <Route exact path="/logout" component={() => this.handleLogout()} />
          <Route
            exact
            path="/profile"
            component={() => (
              <UserProfile
                handleUpdateProfile={this.handleUpdateProfile}
                user={user}
                deleteUser={this.deleteUser}
              />
            )}
          />
          <Route
            exact
            path="/find-a-wall"
            component={() => (
              <MapContainer
                listings={listings}
                user={user}
                handlePostWall={this.handlePostWall}
              />
            )}
          />
          <Route
            exact
            path="/my-listings"
            component={() => (
              <UserListings
                listings={listings.filter((l) => l.user_id === user.id)}
                deleteListing={this.deleteListing}
                handleWallAdoption={this.handleWallAdoption}
                handleListAgain={this.handleListAgain}
              />
            )}
          />
          <Route
            exact
            path="/my-library"
            component={() => (
              <FavVideoContainer
                videos={user.videos}
                deleteFromList={this.deleteFromList}
                selectedVideo={selectedVideo}
                selectVideo={this.selectVideo}
                goBackToAllVideos={this.goBackToAllVideos}
                addToList={this.addToList}
                user={user}
              />
            )}
          />
          <Route exact path="/post-wall" component={() => <PostWall />} />
          <Route
            exact
            path="/get-inspired"
            component={() => (
              <ArtContainer
                addToFavorites={this.addToFavorites}
              />
            )}
          />
          <Route
            exact
            path="/my-inspiration"
            component={() => (
              <FavArtContainer
                userArts={user.arts}
                deleteFromFavorites={this.deleteFromFavorites}
              />
            )}
          />
          <Route
            exact
            path="/learn"
            component={() => (
              <LearnContainer
                user={user}
                videos={videos}
                addToList={this.addToList}
                selectedVideo={selectedVideo}
                selectVideo={this.selectVideo}
                goBackToAllVideos={this.goBackToAllVideos}
              />
            )}
          />
          <Route
            exact
            path="/share"
            component={() => <PhotosContainer user={user} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
