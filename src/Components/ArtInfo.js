import React, { useState } from 'react'
import {Icon} from 'semantic-ui-react'
import {ColorExtractor} from 'react-color-extractor'
import {Link} from 'react-router-dom'

class ArtInfo  extends React.Component {

  //DOESN'T WORK BECAUSE OF CORS - FIX IT!!!
  // state ={
  //   colors: []
  // }

  // renderPalette = () =>{
  //   const {colors} = this.state
  //     return colors.map((color, id) => {
  //       return(
  //         <div key={id}
  //           style={{
  //             backgroundColor: color, 
  //             width: 100, 
  //             height: 100
  //           }}
  //           />
  //       )
  //     })
  // }

  // getColors = colors => 
  //   this.setState(state => (
  //     {colors: [...state.colors, ...colors]}
  //   ))

  
  render(){
    const {chosenArt, goBackToAllArts, addToFavorites} = this.props
    const extra = (
      <div onClick={() => addToFavorites(chosenArt)}>
        <Icon color='red' name='heart outline'  />
      </div>
    )
    return(
      <div>
          {/* <ColorExtractor getColors={this.getColors}> */}
              <img src={chosenArt.image_url} alt='art' />
          {/* </ColorExtractor>
          <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
          {this.renderPalette()}
          </div> */}
          <div>
              <h1>{chosenArt.artist}</h1>
              <h2>{chosenArt.name}</h2>
              <h2>{chosenArt.year}</h2>
              <h3>{extra}</h3>
              <button onClick={goBackToAllArts}>Back To All Art</button>
          </div>
      </div>
    )
  }
}


export default ArtInfo