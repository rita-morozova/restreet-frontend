import React from 'react'

 class NewPhoto extends React.Component {

    state = {
        // username: this.props.user.username,
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
        const userToken = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('likes', this.state.likes)
        // formData.append('username', this.state.username)
        fetch('http://localhost:3000/photos', {
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Authorization' : `Bearer ${userToken}`
            },
            body: formData
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({image: data})
        })
        
    }
    render(){
        return (
            <div className='form'>
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type='file' name='image' accept='image/*'  onChange={this.onChange}/>
                    <input type='submit' value='Submit' />
                    <br/>
                </form>
            </div>
        )
    }
}

export default NewPhoto