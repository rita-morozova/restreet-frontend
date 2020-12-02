import React from 'react'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'

class UserProfile extends React.Component {
    state = {
        name: this.props.user.name,
        location: this.props.user.location,
        bio: this.props.user.bio,
        picture: this.props.user.picture,
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
        return(
        <div>
          <h1>Hi {this.props.user.username}</h1>
          <h2>This is who you are:</h2>
          <h3>Your username: {this.props.user.username}</h3>
          <h3>Your email: {this.props.user.email}</h3>
          <h3>Your name: {this.props.user.name}</h3>
          <h3>Your location: {this.props.user.location}</h3>
          <h3>Your bio: {this.props.user.bio}</h3>
          {/* <h3>Your picture: {this.props.user.picture.toString}</h3> */}
          {/* <div style={{
                height: '60px',
                width: '60px'
                }}
            >
            <img alt ='your photo' style={{
                    width: '20%',
                    height: '20%',
                    position: 'absolute'
                }}  
            />
            </div> */}
         
          <br />
          <br />
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                        Edit Your Profile
                    </Header>
                        <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
                            <Segment stacked>
               
                             <Form.Input fluid placeholder='Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />

                             <Form.Input fluid placeholder='Location' type='text' name='location' value={this.state.location} onChange={this.handleChange} /><br />

                             <Form.Input fluid placeholder='Bio' type='text' name='bio' value={this.state.bio} onChange={this.handleChange} /><br />

                             <Form.Input  fluid placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />


                            {/* <Form.Input  fluid placeholder='Confirm Password' type='password' name='confirm-password' value={this.state.password} onChange={this.handleChange}/><br /> */}
                
                            {/* <input type='submit' /> */}
                                <Button color='olive' fluid size='large'>
                                    Update Profile
                                </Button> 
                                <br />
                                <Button color='olive' fluid size='large' onClick={this.props.deleteUser}>
                                    Delete Profile
                                </Button>
                            </Segment>
                        </Form>
                </Grid.Column>
            </Grid>
        </div> 
   )
  }
}


export default UserProfile