import React, { Fragment } from 'react'
import { useState } from 'react'
import {Card, Icon} from 'semantic-ui-react'


class Photo extends React.Component {

  state = {
    count: 0,
    liked: false,
    likes: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/likes')
    .then(resp => resp.json())
    .then(data => {
      this.setState({likes: data})
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
      this.setState({count: this.state.count +=1, liked: !this.state.liked})
    })
  }

  handleDeleteLike = (like) =>{
    // const deleteLike = this.state.user.favvideos.find(favorite => favorite.video_id === video.id)
    const deleteLike = this.state.likes.find(l => l.id ===like.id)
    // photo.likes.length = photo.likes.length - 1
    fetch(`http://localhost:3000/likes/${deleteLike.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(resp => resp.json())
    .then(data =>{
      console.log(data)
      localStorage.removeItem('like')
      this.setState({count: this.state.count -=1, liked: !this.state.liked})
    })
  }

  render(){
    const{photo} = this.props
    // let label = this.state.liked ? '♥' : '♡'
    return(
      <div >
        <div key={photo.id}> 
          <img src={photo.image}  width={300} height={300}  alt='art' />
          <h2>By: {photo.username}</h2>
          {/* <h3><Icon name='heart' color='red' />{photo.likes.length > 0 ? photo.likes.length : 0}</h3> */}
          {/* <button key={photo.id}  onClick={() => this.handleLike(photo)}>Like</button> */}
         
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

export default Photo