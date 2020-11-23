import React from 'react'
import { Form, Button, Header, Image, Modal, Grid, Segment } from 'semantic-ui-react'

class PostWall extends React.Component {
 
  state = {
    latitude: '',
    longitude: '',
    address: '',
    zipcode: '',
    description: '',
    photo: '',
    name: '',
    email: ''
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.handlePostWall(this.state)
}

  render(){
  return (
          <div>
            <br />
            <br />
              <Grid textAlign='center' verticalAlign='large'>

                <Grid.Column style={{maxWidth: 450}}>

                  <Header>Wall Details</Header>

            <Form className='wall-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
               <Segment stacked>          
            <Form.Input fluid placeholder='Latitude' type='float' name='latitude' value={this.state.latitude} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Longitude' type='float' name='longitude' value={this.state.longitude} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Address' type='text' name='address' value={this.state.address} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Zipcode' type='text' name='zipcode' value={this.state.zipcode} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Describe the wall' type='text' name='description' value={this.state.description} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Image URL' type='text' name='photo' value={this.state.photo} onChange={this.handleChange} /><br />

            {/* <Form.Input fluid placeholder='Your Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />

            <Form.Input fluid placeholder='Email Address' type='text' name='email' value={this.state.email} onChange={this.handleChange} /><br /> */}

            <Button color='olive' fluid size='medium'>
                Submit
            </Button> 
                </Segment>
            </Form>
              </Grid.Column>
            </Grid>
        </div>
  )
}
}

export default PostWall