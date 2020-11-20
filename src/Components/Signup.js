import React from 'react'

class Signup extends React.Component {

  state = {
    username: '',
    password: '',
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
    <form onSubmit={this.handleSubmit}>
    <h1>SIGNUP</h1>
    <label htmlFor="username">Username:</label>
    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
    <label htmlFor="confirm-password">Confirm Password:</label>
    <input type="password" name="confirm-password" value={this.state.confirm_password} onChange={this.handleChange}/>
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>  
    <input type="submit" value="Submit"/>
     </form>
     </div>
    )
}
}



export default Signup