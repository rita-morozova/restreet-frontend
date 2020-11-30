import React, { Fragment } from 'react'
import { useState } from 'react'
import {Card, Icon} from 'semantic-ui-react'


class Photo extends React.Component {

  state = {
    count: 0,
    liked: false
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
      this.setState({count: this.state.count +=1, liked: !this.state.liked})
    })
  }

  render(){
    const{photo} = this.props
    // handleLike
    return(
      <div >
        <div key={photo.id}> 
          <img src={photo.image}  width={300} height={300}  alt='art' />
          <h2>By: {photo.username}</h2>
          <h3><Icon name='heart' color='red' />{photo.likes.length > 0 ? photo.likes.length : 0}</h3>
          {/* <button key={photo.id}  onClick={() => handleLike(photo.id)}>Like Photo</button> */}
          {this.state.liked ?
          <Fragment>
            <button>Unlike Photo</button>
          </Fragment>
          :
          <Fragment>
          <button key={photo.id}  onClick={() => this.handleLike(photo)}>Like Photo</button>
          </Fragment>
          }
          </div>
      </div>
    )
  }
}

export default Photo