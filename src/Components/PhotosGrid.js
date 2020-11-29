import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import NewPhoto from './NewPhoto' 
import Photo from './Photo'
import PhotoModal from './PhotoModal'


const PhotosGrid = ({photos, user, handleUploadPhoto, handleLike}) => {


    return(
      <div >
        <PhotoModal photos={photos} user={user} handleUploadPhoto={handleUploadPhoto}/>
        {/* <NewPhoto photos={photos} user={user} handleUploadPhoto={handleUploadPhoto}/> */}
       {photos.map(photo => <Photo key={photo.id} photo={photo} handleLike={handleLike}  />)}
       
      </div>
    )
}

export default PhotosGrid