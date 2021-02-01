import React from "react";
import { Container } from "semantic-ui-react";
import ArtInfo from "../Components/ArtInfo";
import ArtPhotosContainer from "./ArtPhotosContainer";

class ArtContainer extends React.Component {
  state = {
    arts: [],
    chosenArt: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch("https://re-street.herokuapp.com/arts", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          arts: data,
        });
      });
  }

  selectArt = (id) => {
    this.setState({
      chosenArt: this.state.arts.find((art) => art.id === id),
    });
  };

  goBackToAllArts = () => {
    this.setState({
      chosenArt: null,
    });
  };

  render() {
    const { arts, chosenArt } = this.state;
    return (
      <div>
        <Container textAlign="center">
          {!chosenArt ? (
            <ArtPhotosContainer arts={arts} selectArt={this.selectArt} />
          ) : (
            <ArtInfo
              chosenArt={chosenArt}
              goBackToAllArts={this.goBackToAllArts}
              addToFavorites={this.props.addToFavorites}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default ArtContainer;
