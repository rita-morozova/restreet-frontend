import React from 'react'
import Photo from './Photo'
import PhotoModal from './PhotoModal'
import PhotoInfo from './PhotoInfo'
import '../styles/Photo.css'


const PhotosGrid = ({photos, user, handleUploadPhoto, handleLike, chosenPhoto, selectPhoto, seeAllPhotos, deletePhoto}) => {


  return(
      <div >
        <br />
        <PhotoModal photos={photos} user={user} handleUploadPhoto={handleUploadPhoto} />
        {chosenPhoto ?
        <PhotoInfo chosenPhoto={chosenPhoto} seeAllPhotos={seeAllPhotos} user={user} handleLike={handleLike} deletePhoto={deletePhoto}/>
        :
        <>
        <div className='gallery'>    
       {photos.map(photo =><Photo key={photo.id} photo={photo} user={user} selectPhoto={selectPhoto} />)}   
        </div> 
       </>
       } 
      </div>
    )
}

export default PhotosGrid