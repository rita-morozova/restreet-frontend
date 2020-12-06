import React from 'react'
import ArtCard from '../Components/ArtCard'
import ArtContainer from './ArtContainer'
import {Grid} from 'semantic-ui-react'
import '../styles/Arts.css'

const ArtPhotosContainer = ({arts, selectArt}) => {

const randomArts = arts.sort(() => Math.random() - 0.5)

  return(
    <div className='all-arts'>
      <Grid columns={3} stretched>
      {randomArts.map (art =><ArtCard key={art.id} art={art}  selectArt={selectArt}/>)}
      </Grid>
    </div>
  )
}

export default ArtPhotosContainer