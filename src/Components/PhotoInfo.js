import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Icon} from 'semantic-ui-react'
import Timeago from 'react-timeago'




class PhotoInfo extends React.Component {

  state = {
    count: this.props.chosenPhoto.count,
    userLikedPhotos: [],
    userLikedThisPhoto: false
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3000/likes')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     const photoLikes = data.filter(like => like.photo_id === this.props.chosenPhoto.id)[0]
  //     debugger
  //     this.setState({
  //       if(photoLikes == 0 || photoLikes === undefined){
  //         userLikedThisPhoto: false
  //       }else{
  //         userLikedThisPhoto: photoLikes.user_id === this.props.user.id ? true : false
  //       }
  //       })
  //   }) 
  // }


//  handleLike = (chosenPhoto) => {
//   const userToken = localStorage.getItem('token')
//   chosenPhoto.likes.length = chosenPhoto.likes.length + 1
//   fetch('http://localhost:3000/likes', {
//       method: 'POST',
//       headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",
//               "Authorization": `Bearer ${userToken}`
//             },
//             body: JSON.stringify(({photo_id: chosenPhoto.id, user_id: this.props.user.id}))
    
//     })
//     .then(resp => resp.json())
//     .then(data =>{
//       this.setState({photoLikes: this.state.photoLikes +=1, liked: data.likes.filter(l => l.photo_id === chosenPhoto.id ? 'show unlike btn': 'show like btn')})
//     })
//   }
  

  handleLike = (chosenPhoto) =>{
    const userToken = localStorage.getItem('token')
    const updateLikes = chosenPhoto.count + 1
    fetch(`http://localhost:3000/photos/${chosenPhoto.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
       body: JSON.stringify(({count: updateLikes, liked: true }))
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        // this.setState({photoLikes: data.likes, liked: data.liked})
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
    console.log(this.state.userLikedThisPhoto)
    return(
      <div >
        <div key={chosenPhoto.id}> 
          <button onClick={seeAllPhotos}>Go Back</button>
          <img src={chosenPhoto.image}  width={300} height={300}  alt='art' />
          <h2>By: {chosenPhoto.username}</h2>
          {/* <h3><Icon name='heart' color='red' />{this.state.photoLikes > 0 ? this.state.photoLikes : 0}</h3> */}
          <h3><Icon name='heart' color='red' />{chosenPhoto.count > 0 ? chosenPhoto.count : 0}</h3>
     
          <button key={chosenPhoto.id}  onClick={() => this.handleLike(chosenPhoto)} disable={this.state.liked ? true :false} >Like</button>
          
          {/* <button key={chosenPhoto.id}  onClick={() => this.deleteLike(chosenPhoto)}>Unlike</button> */}
          




          {/* {
            !chosenPhoto.likes.filter(u => u.user_id === this.props.user) ? */}
            {/* {this.state.liked === false ?
          <button key={chosenPhoto.id}  onClick={() => this.handleLike(chosenPhoto)}>Like</button>
          :
          "hahah"
            } */}
          {/* :
          <button key={chosenPhoto.id}  onClick={() => this.deleteLike(chosenPhoto)}>Unlike</button>
          }
         */}

          {/* <h3><Icon name='heart' color='red' />{chosenPhoto.likes.length > 0 ? chosenPhoto.likes.length : 0}</h3> */}
          {/* {!this.state.liked ?
          <button key={chosenPhoto.id}  onClick={() => this.handleLike(chosenPhoto)}>Like</button>
          :
          <button key={chosenPhoto.id}  onClick={() => this.deleteLike(chosenPhoto)}>Unlike</button> */}
          
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