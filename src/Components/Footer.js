import React from 'react'
import {Segment, Icon, Grid} from 'semantic-ui-react'


const Footer = () => {

  return(
    <Segment vertical style={{backgroundColor: '#fac339'}}>
        <Grid container textAlign='center'>
             <Grid.Column>
                © 2020 RE-STREET
            </Grid.Column>
        </Grid>
    </Segment>
  
  )
}

export default Footer