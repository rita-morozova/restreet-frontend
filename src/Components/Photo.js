import React from 'react'


const Photo = ({photo, selectPhoto}) => {


  const handleClick = () => {
    selectPhoto(photo)
  }
  
    return(
      <div >
        <div key={photo.id}> 
          <img src={photo.image}  width={300} height={300}  alt='art' onClick={handleClick}/>
          </div>
      </div>
    )

}

export default Photo