import React from 'react'
import {Form, Grid, Button, Header, Message, Segment} from 'semantic-ui-react'
import axios from 'axios'


class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errors: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
      this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  validate = () => {
    if(this.state.username === '' || this.state.password === '') return false
    else return true
  } 


render(){
  const isEnabled = this.validate()
return (
  <div>
    <br />
    <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' textAlign='center'>
                LOGIN
            </Header>
            <p>
              {this.state.errors ? 'Invalid Username or Password' : null}
            </p>
    <Form className='login-form' size='large' onSubmit={this.handleSubmit}>
      <Segment stacked>
          <Form.Input  fluid icon='user' iconPosition='left' type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/><br />

          <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br />
    
          <Button color='olive' fluid size='large'>
            Login
          </Button>    
        </Segment>
    </Form>
      {/* <Message> FIX VALIDATE
        New to us? <a href='/signup'>Sign Up</a>
      </Message> */}
    </Grid.Column>
   </Grid>
    
    
    {/* <label htmlFor="username">Username:</label>
    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
    <input type="submit" value="Submit"  />
     </form> */}
  </div>
    )
}
}


export default Login