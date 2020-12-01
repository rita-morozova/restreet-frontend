import React from 'react'
import PhotosGrid from '../Components/PhotosGrid'



class PhotosContainer extends React.Component{

  state ={
    photos: [],
    count: 0,
    chosenPhoto: null,
  }

  componentDidMount = () =>{
   this.getPhotos()
  }

  getPhotos = () =>{
    fetch ('http://localhost:3000/photos')
    .then(resp => resp.json())
    .then(data => {
      this.setState({photos: data})
    })
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

 


  // deletePhoto = (photo) =>{
  //   let chosenPhoto = this.state.photos.filter(p=> p.id === photo.id)
  //   fetch(`http://localhost:3000/photos/${chosenPhoto.id}`,{
  //     method: 'DELETE'
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //   this.setState((prevState) =>({
  //     photos: [...prevState.photos.filter(p => p.id !== data.id)]
  //   }))
  // })
  // }

  // handleLike = (photo) =>{
  //   const userToken = localStorage.getItem('token')
  //   photo.likes = photo.likes + 1
  //   fetch('http://localhost:3000/likes', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //       "Authorization": `Bearer ${userToken}`
  //     },
  //     body: JSON.stringify({
  //       likes: photo.likes
  //     }) 
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
     
  //     const updatePhoto = this.state.photos.map(photo => {
  //       if(photo.id === data.id){
  //         photo.likes = data.likes
  //       }
  //       return photo
  //     })
  //     this.setState({
  //       photos: updatePhoto,
  //     })
  //   })
  // }


//  handleLike = (photo) => {
//   console.log(photo)
//   // console.log(user)
//   // const userId= this.props.user.id
//  const userToken = localStorage.getItem('token')
//  photo.likes.length = photo.likes.length + 1
//  fetch(`http://localhost:3000/photo/${photo.id}/likes`, {
//      method: "PATCH",
//      headers: {
//              "Content-Type": "application/json",
//              "Accept": "application/json",
//              "Authorization": `Bearer ${userToken}`
//            },
//            body: JSON.stringify(({likes: photo.likes}))
   
//    })
//  
//   .then(data => {
//     console.log(data)
//         const updatePhoto = this.state.photos.map(photo => {
//           if(photo.id === data.id){
//             photo.likes = data.likes
//           }
//           return photo
//         })
//         this.setState({
//           photos: updatePhoto,
//         })
//       })
//  }

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
        <PhotosGrid  photos={this.state.photos} user={user} handleUploadPhoto={this.handleUploadPhoto} handleLike={this.handleLike} selectPhoto={this.selectPhoto} chosenPhoto={this.state.chosenPhoto} seeAllPhotos={this.seeAllPhotos} />   
      </div>
    )
  }
}

export default PhotosContainer