import React from 'react'
import ArtCard from '../Components/ArtCard'
import {Container} from 'semantic-ui-react'


class ArtContainer extends React.Component {
  
  state ={
    arts: []
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

  render(){
    const {arts} = this.state
    return(
      <Container textAlign='center'>
        {arts.map (art => <ArtCard key={art.id} art={art} />)}
      </Container>
    )
  }
}

export default ArtContainer