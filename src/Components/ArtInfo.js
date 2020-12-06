import React, { useState } from 'react'
import {Icon, Button} from 'semantic-ui-react'
import {ColorExtractor} from 'react-color-extractor'
import {Link} from 'react-router-dom'
import '../styles/Arts.css'

class ArtInfo  extends React.Component {

  state ={
    colors: []
  }

  renderPalette = () =>{
    const {colors} = this.state
      return colors.map((color, id) => {
        return(
          <div key={id}
            style={{
              backgroundColor: color, 
              width: 100, 
              height: 100
            }}
            />
        )
      })
  }

  getColors = colors => 
    this.setState(state => (
      {colors: [...state.colors, ...colors]}
    ))

  
  render(){
    const {chosenArt, goBackToAllArts, addToFavorites} = this.props
    const extra = (
      <div onClick={() => addToFavorites(chosenArt)}>
        <Icon color='red' name='heart outline'  size='large' />
      </div>
    )
    return(
     <div className='arrow-back'>
        <Button  onClick={goBackToAllArts} basic color='blue' style={{float: 'left'}}>Back</Button>
      <div className='art-page'>
          <ColorExtractor getColors={this.getColors}>
              <img src={chosenArt.image_url} alt='art' />
          </ColorExtractor>
          <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
          {this.renderPalette()}
          </div>
          <div className='art-info'>
              <h1>{chosenArt.artist}</h1>
              <h2>{chosenArt.name}</h2>
              <h2>{chosenArt.year}</h2>
              <h3>{extra}</h3>
          </div>
      </div>
  </div> 
    )
  }
}


export default ArtInfo