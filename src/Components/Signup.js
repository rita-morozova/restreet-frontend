import React from 'react'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'


class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

render(){
return (
    <div>
      <br />
      <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 450}}>
              <Header as='h2' textAlign='center'>
                        SIGNUP
              </Header>
    <Form className='signup-form' size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
        <Form.Input fluid placeholder='Username' type='text' name='username' value={this.state.username} onChange={this.handleChange}/><br />

        <Form.Input  fluid placeholder='E-mail address' type='text' name='email' value={this.state.email} onChange={this.handleChange}/> <br />

        <Form.Input  fluid placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />

        <Form.Input fluid placeholder='Confirm Password' type='password' name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/><br/>

        <Button color='olive' fluid size='large'>
          Sign Up
        </Button> 
          </Segment>
      </Form>
            </Grid.Column>
       </Grid>
     </div>
    )
}
}



export default Signup