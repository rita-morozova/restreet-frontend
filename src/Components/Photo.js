import React from 'react'


class Photo extends React.Component {


  handleClick = () => {
    this.props.selectPhoto(this.props.photo)
  }

  render(){
    const{photo} = this.props
  
    return(
      <div >
        <div key={photo.id}> 
          <img src={photo.image}  width={300} height={300}  alt='art' onClick={this.handleClick}/>
          </div>
      </div>
    )
  }
}

export default Photo