import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import NewPhoto from './NewPhoto' 
import Photo from './Photo'
import PhotoModal from './PhotoModal'
import PhotoInfo from './PhotoInfo'


const PhotosGrid = ({photos, user, handleUploadPhoto, handleLike, chosenPhoto, selectPhoto, seeAllPhotos, deletePhoto}) => {


    return(
      <div >
        <PhotoModal photos={photos} user={user} handleUploadPhoto={handleUploadPhoto} />
        {chosenPhoto ?
        <PhotoInfo chosenPhoto={chosenPhoto} seeAllPhotos={seeAllPhotos} user={user} handleLike={handleLike} deletePhoto={deletePhoto}/>
        :
        <>
       {photos.map(photo => <Photo key={photo.id} photo={photo} user={user} selectPhoto={selectPhoto} />)}
       </>
       }
       
      </div>
    )
}

export default PhotosGrid