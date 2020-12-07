import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const PostWall = ({position, user, handlePostWall}) => {
 
    const [address, setAddress] = useState('')
    const [zipcode, setZipCode] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto]= useState('')
    const [user_id, setUser_id] =useState(user.id)
    const [adopted, setAdopted] = useState(false)


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
        <Grid>
            <div>
                <h3 style={{color: '#44484b'}}>Add New Location</h3>
            <form  noValidate>
            <Grid container spacing={1} >
                <Grid item xs={12} >
                    <TextField 
                    name='address'
                    variant='outlined'
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                    fullWidth
                    id='address'
                    label='address'
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name='zipcode'
                    variant='outlined'
                    value={zipcode}
                    onChange={(event) => setZipCode(event.target.value)}
                    required
                    fullWidth
                    id='zipcode'
                    label='zipcode'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name='description'
                    variant='outlined'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    fullWidth
                    id='description'
                    label='description'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name='photo'
                    variant='outlined'
                    value={photo}
                    onChange={(event) => setPhoto(event.target.value)}
                    required
                    fullWidth
                    id='photo'
                    label='Photo URL'
                    />
                   </Grid> 
                <Button 
                    type='submit'
                    onClick={handleSubmit} 
                    color='secondary'
                    fullWidth
                    variant='contained'
                    >
                    Create New Wall
                </Button> 
            </Grid>
        </form>
    </div>
</Grid>
    )
}

export default PostWall

