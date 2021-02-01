import React from "react";
import { Icon } from "semantic-ui-react";
import TimeAgo from "react-timeago";
import "../styles/Photo.css";

class PhotoInfo extends React.Component {
  state = {
    liked: false,
    likes: [],
    photoLikes: [],
    disabledButton: false,
  };

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    fetch("https://re-street.herokuapp.com/likes", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          likes: data,
          photoLikes: data.filter(
            (like) => like.photo_id === this.props.chosenPhoto.id
          ),
        });
      });
  };

  handleLike = (chosenPhoto) => {
    let token = localStorage.getItem("token");
    fetch("https://re-street.herokuapp.com/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        photo_id: chosenPhoto.id,
        user_id: this.props.user.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          photoLikes: [...prevState.photoLikes, data],
          disabledButton: !this.state.disabled,
        }));
      });
  };

  render() {
    const { chosenPhoto, seeAllPhotos, user, deletePhoto } = this.props;
    return (
      <div className="popup">
        <div className="inner-popup" key={chosenPhoto.id}>
          <div className="header-photo">
            <Icon
              name="arrow left"
              color="purple"
              onClick={seeAllPhotos}
              size="large"
            />
            {user.id === chosenPhoto.user_id ? (
              <Icon
                name="trash alternate outline"
                color="purple"
                onClick={() => deletePhoto(chosenPhoto)}
                size="large"
              />
            ) : null}
          </div>
          <img
            src={chosenPhoto.image}
            width={320}
            height={320}
            alt="street art"
          />
          <h5>
            <TimeAgo date={chosenPhoto.created_at} />
          </h5>
          <h2> By: {chosenPhoto.username}</h2>
          <h3>
            <Icon
              name="heart"
              color="red"
              key={chosenPhoto.id}
              onClick={() => this.handleLike(chosenPhoto)}
              disabled={this.state.disabledButton}
            />
            {this.state.photoLikes.length}
          </h3>
        </div>
      </div>
    );
  }
}

export default PhotoInfo;
