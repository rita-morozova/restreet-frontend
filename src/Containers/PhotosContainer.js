import React from 'react'
import NewPhoto from '../Components/NewPhoto'
import Photo from '../Components/Photo'


class PhotosContainer extends React.Component{

  state ={
    photos: []
  }

  componentDidMount = () =>{
    fetch ('http://localhost:3000/photos')
    .then(resp => resp.json())
    .then(data => {
      this.setState({photos: data})
    })
  }


  render(){
    return(
      <div>
       SHOW ALL PHOTOS HERE
       <NewPhoto />
       {this.state.photos.map(photo => <Photo key={photo.id} photo={photo} />)}
      </div>
    )
  }
}

export default PhotosContainer