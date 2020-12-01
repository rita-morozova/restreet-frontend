import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '10vh',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '10ch',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const PostWall = ({position, user, handlePostWall}) => {
 
    // const [lat, setLat]=useState(position.lat)
    // const [lng, setState]=useState(position.lng)
    const [address, setAddress] = useState("")
    const [zipcode, setZipCode] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto]= useState("")
    const [user_id, setUser_id] =useState(user.id)
    const [adopted, setAdopted] = useState(false)
    const classes = useStyles();


  

    const handleSubmit = async (event) => {
        event.preventDefault()
       handlePostWall({
         lat: position.lat,
         lng: position.lng,
         address,
         zipcode,
         description,
         photo, 
         user_id: user.id,
         adopted: false
       })
    }
    return (
        <Grid  component="main" >
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="p"  >
                Add New Location
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={1} >
                <Grid item xs={12} >
                    <TextField 
                    name="address"
                    variant="outlined"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                    fullWidth
                    id="address"
                    label="address"
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name="zipcode"
                    variant="outlined"
                    value={zipcode}
                    onChange={(event) => setZipCode(event.target.value)}
                    required
                    fullWidth
                    id="zipcode"
                    label="zipcode"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name="descriptions"
                    variant="outlined"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    fullWidth
                    id="description"
                    label="description"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name="photo"
                    variant="outlined"
                    value={photo}
                    onChange={(event) => setPhoto(event.target.value)}
                    required
                    fullWidth
                    id="photo"
                    label="Photo URL"
                    />
                   </Grid> 
                <Button 
                    type="submit" 
                    onClick={handleSubmit} 
                    color="primary"
                    fullWidth
                    variant="contained"
                    >Create New Location
                </Button> 
            </Grid>
        </form>
    </div>
</Grid>
    )
}

export default PostWall


// import React from 'react'
// import { Form, Button, Header, Image, Modal, Grid, Segment } from 'semantic-ui-react'


// class PostWall extends React.Component {
 
//   state = {
//     lat: '',
//     lng: '',
//     address: '',
//     zipcode: '',
//     description: '',
//     photo: '',
//     user_id: this.props.user.id,
//     adopted: false
// }

// handleChange = (event) => {
//   this.setState({[event.target.name]: event.target.value})
// }

// handleSubmit = (event) => {
//   event.preventDefault()
//   this.props.handlePostWall(this.state)
// }

//   render(){
//   return (
//           <div>
//             <br />
//             <br />
//               <Grid textAlign='center' verticalAlign='large'>

//                 <Grid.Column style={{maxWidth: 450}}>

//                   <Header>Wall Details</Header>

//             <Form className='wall-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
//                <Segment stacked>          
//             <Form.Input fluid placeholder='Latitude' type='float' name='lat' value={this.state.lat} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Longitude' type='float' name='lng' value={this.state.lng} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Address' type='text' name='address' value={this.state.address} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Zipcode' type='text' name='zipcode' value={this.state.zipcode} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Describe the wall' type='text' name='description' value={this.state.description} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Image URL' type='text' name='photo' value={this.state.photo} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Owner' type='hidden' name='user_id' value={this.state.user_id} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Adopted' type='hidden' name='adopted' value={this.state.adopted} onChange={this.handleChange} /><br />


//             {/* <Form.Input fluid placeholder='Your Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />

//             <Form.Input fluid placeholder='Email Address' type='text' name='email' value={this.state.email} onChange={this.handleChange} /><br /> */}

//             <Button color='olive' fluid size='medium'>
//                 Submit
//             </Button> 
//                 </Segment>
//             </Form>
//               </Grid.Column>
//             </Grid>
//         </div>
//   )
// }
// }

// export default PostWall