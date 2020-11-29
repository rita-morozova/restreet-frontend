import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import NewPhoto from './NewPhoto' 
import Photo from './Photo'


const PhotosGrid = ({photos, user, handleUploadPhoto, handleLike}) => {


    return(
      <div >
        <NewPhoto photos={photos} user={user} handleUploadPhoto={handleUploadPhoto}/>
       {photos.map(photo => <Photo key={photo.id} photo={photo} handleLike={handleLike} />)}
       
      </div>
    )
}

export default PhotosGrid