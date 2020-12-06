import React from 'react'
import PropTypes from 'prop-types'
import {Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Responsive, Sidebar, Visibility} from 'semantic-ui-react'
import '../styles/Home.css'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='RE-STREET'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em': '3em'
      }}
    />
    <Header
      as='h2'
      content='Our mission: to live in painted cities.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    {/* <Button primary size='huge'>
      Get Started
      <Icon name="right arrow" />
    </Button> */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

const Home = ({user}) => {

 
    return(
      <div className='wrapper'>
        <section className='section parallax bg1'>
          <h1>RE-STREET</h1>
        </section>
        <section className='section static'>
          <h1>Explain Who We are:
          Need to throw a little party? Let us know, our space upstairs is available for rent.
                  We also have a full bar to bring a little fun to your party!</h1>
        </section>
        <section className='section parallax bg2'>
          <h1>Street Art</h1>
        </section>
        <section className='section static'>
        <Segment vertical>
          <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>
              <Image 
                centered
                size='medium'
                src="https://images.unsplash.com/photo-1511424443513-a00662140eeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"  />
                <Header as='h1' style={{color: 'white'}}>LEARN</Header>
                <p>
                  Who doesn't love a nice plant? We've stocked our shelves with locally
                  grown indoor plants. Now more than ever, is a great time to shop small.
                </p> 
                {/* <Link to='/all-plants'><Button basic>Shop Now</Button></Link> */}
            </Grid.Column> 
            <Grid.Column>
              <Image 
                centered
                size='medium'
                src="https://images.unsplash.com/photo-1601159091942-9241e4b36c4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAxfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Header as='h1' style={{color: 'white'}}>PAINT</Header>
                <p>
                  Have we mentioned we love plants? We have a huge selection of indoor plants available in our store. We also offer
                  free delivery.
                </p> 
                {/* <Link to='/all-plants'><Button basic>Shop Plants</Button></Link> */}
             </Grid.Column>
            <Grid.Column>
              <Image 
                centered
                size='medium'
                src='https://images.unsplash.com/photo-1470700467371-d42b6c25c6a8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80' />
                <Header as='h1' style={{color: 'white'}}>SHARE</Header>
                <p>
                  Need to throw a little party? Let us know, our space upstairs is available for rent.
                  We also have a full bar to bring a little fun to your party!
                </p> 
                {/* <a href='mailto: hello@iplant.com'><Button basic>Email Us</Button></a> */}
             </Grid.Column>
          </Grid>
        </Segment>
        </section>       
      </div>
    )

}

export default Home