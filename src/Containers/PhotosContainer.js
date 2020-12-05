import React from 'react'
import PhotosGrid from '../Components/PhotosGrid'




class PhotosContainer extends React.Component{
  _isMounted=false

  state ={
    photos: [],
    chosenPhoto: null,
  }

  componentDidMount = () =>{
    this._isMounted=true
    this.getPhotos()
  }

  getPhotos = () =>{
    fetch ('http://localhost:3000/photos')
    .then(resp => resp.json())
    .then(data => { 
      if(this._isMounted){
      this.setState({photos: data})
    }})
  } 

  componentWillUnmount(){
    this._isMounted=false
  }

  handleUploadPhoto = (formData) =>{
    const userToken = localStorage.getItem('token')
    fetch('http://localhost:3000/photos', {
      method:'POST',
      headers:{
        'Authorization' : `Bearer ${userToken}`
      },
      body: formData
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
     this.setState((prevState) =>({
       photos: [...prevState.photos, data]
     }))
     this.getPhotos()
     //scroll down to the uploaded photo
     window.scrollTo(0,document.body.scrollHeight)
    })
  }

  deletePhoto = (photo) =>{
    fetch(`http://localhost:3000/photos/${photo.id}`,{
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
    this.setState((prevState) =>({
      photos: [...prevState.photos.filter(p => p.id !== data.id)],
      chosenPhoto: null
    }))
  })
  }
 
  selectPhoto = photo =>{
    this.setState({
      chosenPhoto: this.state.photos.find(p => p ===photo)
    })
  }

 
  seeAllPhotos = () => {
    this.setState({chosenPhoto: null})
  } 



  
  render(){
    const {user} = this.props
    return(
      <div>
        <PhotosGrid  
          photos={this.state.photos} 
          user={user} 
          handleUploadPhoto={this.handleUploadPhoto} 
          selectPhoto={this.selectPhoto} 
          chosenPhoto={this.state.chosenPhoto} 
          seeAllPhotos={this.seeAllPhotos}
          deletePhoto={this.deletePhoto}
           />   
      </div>
    )
  }
}

export default PhotosContainer