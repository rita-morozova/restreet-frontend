import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import ListingsContainer from './ListingsContainer'


class MainContainer extends React.Component {



 

  render(){
    return(
      <div>
        <Header />
        <br />
            HELLO!!!!!!!!!

            <Map adoptWall={this.props.adoptWall} />
            {/* <ListingsContainer listings={this.state.listings}/> */}
      </div>
    )
  }
}

export default MainContainer