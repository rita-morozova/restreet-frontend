import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Icon} from 'semantic-ui-react'




class PhotoInfo extends React.Component {

  state = {
    count: 0,
    liked: false,
    likes: [],
    photoLikes: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/likes')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        likes: data,
        photoLikes: data.filter(like => like.photo_id === this.props.chosenPhoto),
        liked: data.filter(like => like.photo_id === this.props.chosenPhoto).filter(user => user.user_id === this.props.user) ? true : false
        })
    })
  }




 handleLike = (photo) => {
  const userToken = localStorage.getItem('token')
  photo.likes.length = photo.likes.length + 1
  fetch('http://localhost:3000/likes', {
      method: 'POST',
      headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify(({photo_id: photo.id}))
    
    })
    .then(resp => resp.json())
    .then(data =>{
      console.log(data)
      localStorage.setItem('like', data.likes)
      this.setState({count: this.state.count +=1})
    })
  }



  // handleDeleteLike = (like) =>{
  //   // const deleteLike = this.state.user.favvideos.find(favorite => favorite.video_id === video.id)
  //   const deleteLike = this.state.likes.find(l => l.id ===like.id)
  //   // photo.likes.length = photo.likes.length - 1
  //   fetch(`http://localhost:3000/likes/${deleteLike.id}`,{
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type':'application/json',
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(data =>{
  //     console.log(data)
  //     localStorage.removeItem('like')
  //     this.setState({count: this.state.count -=1, liked: !this.state.liked})
  //   })
  // }
 
 

  render(){
    const {chosenPhoto, seeAllPhotos} = this.props
    return(
      <div >
        <div key={chosenPhoto.id}> 
          <button onClick={seeAllPhotos}>Go Back</button>
          <img src={chosenPhoto.image}  width={300} height={300}  alt='art' />
          <h2>By: {chosenPhoto.username}</h2>
          <h3><Icon name='heart' color='red' />{chosenPhoto.likes.length > 0 ? chosenPhoto.likes.length : 0}</h3>
          {!this.state.liked ?
          <button key={chosenPhoto.id}  onClick={() => this.handleLike(chosenPhoto)}>Like</button>
          :
          <button key={chosenPhoto.id}  onClick={() => this.deleteLike(chosenPhoto)}>Unlike</button>
          }
          {/* {this.state.liked ?
          <Fragment>
            <button key={photo.id}  onClick={() => this.handleDeleteLike(photo)}>Unlike Photo</button>
          </Fragment>
          :
          <Fragment>
          <button key={photo.id}  onClick={() => this.handleLike(photo)}>Like Photo</button>
          </Fragment>
          } */}
          </div>
      </div>
    )
  }
}

export default PhotoInfo