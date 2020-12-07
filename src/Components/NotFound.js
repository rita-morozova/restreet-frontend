import React from 'react'
import {Container} from 'semantic-ui-react'
import notFound from '../images/notFound.gif'


const NotFound = () => {
  
  return(
    <Container textAlign='center'>
      <img src={notFound} style={{marginTop: '50px'}}alt='page not found' />
    </Container>
    )}

export default NotFound