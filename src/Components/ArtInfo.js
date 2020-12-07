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
    return(
    <div className='modal-art-info'>
      <div className='inner-modal-art'>
     <div className='buttons'>
       <Button.Group>
        <Button  onClick={goBackToAllArts} color='yellow'>Back</Button>
        <Button.Or />
        <Button onClick={() => addToFavorites(chosenArt)} color='red' > <Icon color='white' name='heart'  size='large' /></Button>
        </Button.Group>
       </div> 
      <div className='art-page'>
          <ColorExtractor getColors={this.getColors}>
              <img src={chosenArt.image_url} alt='art' /> 
          </ColorExtractor>
          <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
          {this.renderPalette()}
          </div>
          <div className='art-info'>
              <h1 style={{fontWeight: 'bold'}}>{chosenArt.artist}</h1>
              <h2 style={{fontStyle: 'italic'}}>{chosenArt.name}</h2>
              <h3 style={{fontStyle: 'italic'}}>{chosenArt.year}</h3>
          </div>
      </div>
    </div>
  </div> 
    )
  }
}


export default ArtInfo