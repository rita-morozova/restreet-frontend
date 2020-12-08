import React from 'react'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'
import '../styles/Profile.css'
import {Link} from 'react-router-dom'


class UserProfile extends React.Component {
    state = {
        name: this.props.user.name,
        location: this.props.user.location,
        bio: this.props.user.bio,
        password: this.props.user.password,
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleUpdateProfile(this.state, `/users/${this.props.user.id}`, 'PATCH')
    }



    render(){
        console.log(this.props.user)
        return(
            <div>
                <div className='user-container'>
                    <div className='row user-menu-container square'>
                        <div className='col-md-7 user-details'>
                            <div className='row coralbg white'>
                                <div className='col-md-6 no-pad'>
                                    <div className='user-pad'>
                                        <h1>Welcome back, {this.props.user.name !== null  ? this.props.user.name : "Stranger"}</h1>
                                        <h3 className='white'>
                                            {this.props.user.location !== null ? this.props.user.location : "From Mystery Land"}
                                        </h3>
                                        <h3 className='white'>
                                            {this.props.user.bio !== null ? this.props.user.bio : "Why don't you tell us about yourself?"}
                                        </h3>
                                     <Button onClick={()=> window.scrollTo('edit-profile', document.body.scrollHeight)} type='button' className='btn btn-labeled btn-info' style={{backgroundColor: '#46D8D2', color: 'white'}}>
                                            Update Profile
                                    </Button>
                                    </div>
                                </div>
                                <div className='col-md-6 no-pad'>
                                    <div className='user-image'>
                                        <img src='https://images.unsplash.com/photo-1511769592469-ff66aff85026?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80' className='img-responsive thumbnail' />
                                    </div>
                                </div>
                            </div>
                            <div className='row overview'>
                                <div className='col-md-4 user-pad text-center coralbg'>
                                  <Link to='/my-inspiration'><h3 style={{color: 'white'}}>FAVORITE ART</h3></Link>
                                </div>
                                <div className='col-md-4 user-pad text-center turqbg'>
                                   <Link to='/my-library'><h3 style={{color: 'white'}}>MY LIBRARY</h3></Link>
                                </div>
                                <div className='col-md-4 user-pad text-center coralbg'>
                                   <Link to='/my-listings'><h3 style={{color: 'white'}}>MY LISTINGS</h3></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          <div  id='edit-profile' className='edit-form'>
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center' style={{color: 'white', marginTop: '20px'}}>
                        Edit Your Profile
                    </Header>
                        <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
                            <Segment stacked>
               
                             <Form.Input fluid placeholder='Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />

                             <Form.Input fluid placeholder='Location' type='text' name='location' value={this.state.location} onChange={this.handleChange} /><br />

                             <Form.Input fluid placeholder='Bio' type='text' name='bio' value={this.state.bio} onChange={this.handleChange} /><br />

                             <Form.Input  fluid placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />

                            {/* <Form.Input  fluid placeholder='Confirm Password' type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/><br /> */}
                
                                <Button style={{backgroundColor: '#FA396F', color: 'white'}} fluid size='large'>
                                    Update Profile
                                </Button> 
                                <br />
                                <Button style={{backgroundColor: '#FA396F', color: 'white'}} fluid size='large' onClick={this.props.deleteUser}>
                                    Delete Profile
                                </Button>
                            </Segment>
                        </Form>
                </Grid.Column>
            </Grid>
         </div>
    </div> 
   )
  }
}


export default UserProfile