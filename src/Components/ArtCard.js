import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import '../styles/Arts.css'

class ArtCard extends React.Component {

  
 
  
  render(){
    const {art} = this.props

    const handleClick = () => {
      this.props.selectArt(art.id)
     
    }
    
    return(
      <div key={art.id} className='masonry-item'>
      <Card> 
      <Image src={art.image_url} alt="Painting" wrapped ui={false} onClick={handleClick} />
      </Card>
      </div>
    )
  }
}

export default ArtCard