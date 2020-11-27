import React from 'react'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'
import FormErrors from './FormErrors'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};


class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    errors: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm(this.state.errors)){
    this.props.handleSubmit(this.state)
    }else{
      console.log('Invalid Form')
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
    let errors = this.state.errors

    switch (name) {
      case 'username': 
        errors.username = 
          value.length < 5
            ? 'Username must be at least 5 characters long'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid';
        break;
      case 'password': 
        errors.password = 
          value.length < 6
            ? 'Password must be at least 6 characters long'
            : '';
        break;
      case 'confirmPassword': 
        errors.confirmPassword = 
          value !== this.state.password
            ? "Passwords don't match"
            : '';
        break;
      default:
        break;
    }
  }


 

render(){
  const{errors} =this.state
return (
    <div>
      <br />
      <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 450}}>
              <Header as='h2' textAlign='center'>
                        SIGNUP
              </Header>
    <Form className='signup-form' size='large' onSubmit={this.handleSubmit} noValidate>
          <Segment stacked>
        <Form.Input fluid placeholder='Username' type='text' name='username' value={this.state.username} onChange={this.handleChange} noValidate/><br />
        {errors.username.length > 0 && 
                <span className='error'>{errors.username}</span>}

        <Form.Input  fluid placeholder='E-mail address' type='text' name='email' value={this.state.email} onChange={this.handleChange} noValidate/> <br />
        {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}

        <Form.Input  fluid placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange} noValidate/><br />
        {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}

        <Form.Input fluid placeholder='Confirm Password' type='password' name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} noValidate/><br/>
        {errors.confirmPassword.value === this.state.password && 
                <span className='error'>{errors.confirmPassword}</span>}

        <Button color='olive' fluid size='large' >
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