import React from 'react'
import ArtCard from '../Components/ArtCard'
import {Container, Card} from 'semantic-ui-react'
import ArtInfo from '../Components/ArtInfo'
import ArtPhotosContainer from './ArtPhotosContainer'
import {Link} from 'react-router-dom'



class ArtContainer extends React.Component{
  
  state ={
    arts: [],
    chosenArt: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/arts')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        arts: data
      })
    })
  }

  selectArt = id => {
    this.setState({
      chosenArt: this.state.arts.find(art => art.id === id)
    })
  }

  goBackToAllArts = () => {
    this.setState({
      chosenArt: null
    })
  }

  render(){
    const {arts, chosenArt} = this.state
    return(
      <div>
      <Container textAlign='center'>
        {!chosenArt ? 
        <ArtPhotosContainer arts={arts} selectArt={this.selectArt}/> 
        :
        <ArtInfo chosenArt={chosenArt} goBackToAllArts={this.goBackToAllArts} addToFavorites={this.props.addToFavorites}/>
        }
      </Container>
     
      </div>
    )
  }
}

export default ArtContainer