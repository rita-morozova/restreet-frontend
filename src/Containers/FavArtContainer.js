import React from 'react'
import ArtCard from '../Components/ArtCard'

class FavArtContainer extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div>
        {this.props.userArts.map(art => <ArtCard key={art.id} art={art} />)}
      </div>
    )
  }
}

export default FavArtContainer