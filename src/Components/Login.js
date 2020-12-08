import React from 'react'
import {Form, Grid, Button, Header, Message, Segment} from 'semantic-ui-react'
import '../styles/Form.css'





class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
      this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  


render(){
return (
  <div className='login-page'>
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' textAlign='center' style={{color: '#FA396F', marginTop: '20px'}}>
                LOGIN
            </Header>
    <Form  size='large' onSubmit={this.handleSubmit} >
      <Segment stacked>
          <Form.Input  fluid icon='user'  iconPosition='left' type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/><br />

          <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br />
        
          <Button fluid size='large' style={{backgroundColor: '#FA396F', color: 'white'}} >
            Login
          </Button>    
        </Segment>
    </Form>
      <Message style={{color: '#FA396F'}}  > 
        New to us? <a style={{color: '#FA396F'}} href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
   </Grid>
 </div>  
    )
}
}


export default Login