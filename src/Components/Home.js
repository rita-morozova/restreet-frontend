import React from 'react'

const Home = ({user}) => {

    return(
      <div>
        {user? `Welcome ${user.username}!` : 'Welcome'}
      </div>
    )
}

export default Home