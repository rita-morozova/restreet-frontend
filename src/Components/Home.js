import React from 'react'
import {Container, Grid, Header, Image,  Segment} from 'semantic-ui-react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'



const Home = ({user}) => {

 
    return(
      <div className='wrapper'>
        <section className='section parallax bg1'>
          <h1 style={{fontSize: '80pt',  textShadow: '5px 5px #e06084'}}>RE-STREET</h1>
        </section>
        <section className='section static'>
          <div className='text'>
          <h1 style={{fontSize: '26pt'}}>Our Mission: To Live in Painted Cities</h1>
          <h1>RE-STREET brings a new experience into the street art world. We believe ethical artists should respect historical architecture and other people’s private property. 
            Check out our map and find ‘legal walls’ where you can create your next masterpiece with the consent of the owner. Do you know a wall location? Share it with the community. 
          </h1>
          <h1> Let’s live in painted cities!</h1>
            </div>
        </section>
        <section className='section parallax bg2'>
          <h1></h1>
        </section>
        <section className='section static'>
        <Segment vertical>
          <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>
              <Link to='/learn'><Image 
                centered
                size='medium'
                src="https://images.unsplash.com/photo-1511815151576-08444c6f1fa6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHN0cmVldCUyMGFydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  />
                </Link>
                <Header as='h1' style={{color: 'white'}}>LEARN</Header>
                <p style={{fontSize: '14pt'}}>
                It doesn’t matter if you are just starting out or you are already a pro, everyone can learn some new tricks from other artists. Check out our lesson selection and see if you find something you can fall in love with.
                </p> 
            </Grid.Column> 
            <Grid.Column>
              <Link to='/get-inspired'><Image 
                centered
                size='medium'
                src="https://images.unsplash.com/photo-1571657047939-d349fa7890f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkzfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </Link>
                <Header as='h1' style={{color: 'white'}}>GET INSPIRED</Header>
                <p style={{fontSize: '14pt'}}>
                Artists are natural creators always trying out new things and developing new artforms. 
                We put together an extensive collection of the modern art. Get inspired by famous artists 
                and create your own mood board.
                </p> 
             </Grid.Column>
            <Grid.Column>
             <Link to='/share'><Image 
                centered
                size='medium'
                src='https://images.unsplash.com/photo-1470700467371-d42b6c25c6a8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80' />
                </Link>
                <Header as='h1' style={{color: 'white'}}>SHARE</Header>
                <p style={{fontSize: '14pt'}}>
                Experience our fantastic community. Sit back and enjoy the artistic experience, or if you dare, share your own art. Don’t forget to show some love to our community!
                </p> 
             </Grid.Column>
          </Grid>
        </Segment>
        </section>  
        <Footer />     
      </div>
    )

}

export default Home