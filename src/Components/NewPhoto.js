import React from 'react'

 class NewPhoto extends React.Component {

    state = {
        username: this.props.user,
        image: {},
        likes: 0,
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        }) 
    }

    onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('likes', this.state.likes)
        formData.append('username', this.state.username)
        this.props.handleUploadPhoto(formData)    
    }


    render(){
        return (
            <div className='form'>
                <form onSubmit={this.onSubmit} >
                    <label>Image Upload</label>
                    <input type='file' name='image' accept='image/*' onChange={this.onChange}/>
                    <input  type='hidden' name='username' value={this.state.username}  />
                    <input  type='hidden' name='likes' value={this.state.likes}  />
                    <br />
                    <br />
                    <input type='submit' value='Submit'/>
                    <br/>
                </form>
            </div>
        )
    }
}

export default NewPhoto