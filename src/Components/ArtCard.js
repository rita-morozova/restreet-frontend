import React from 'react'
import {Card, Image, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ArtCard extends React.Component {

  
 
  
  render(){
    const {art} = this.props

    const handleClick = () => {
      this.props.selectArt(art.id)
     
    }
    
    return(
      <div key={art.id}>
      <Card> 
      <Image src={art.image_url} alt="Painting" wrapped ui={false} onClick={handleClick} />
      </Card>
      </div>
    )
  }
}

export default ArtCard