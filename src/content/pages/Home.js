import React from 'react'
import Signup from './Signup'

const Home = props => {
  return (
    <div>
      <Signup user={props.user} updateToken={props.updateToken}/>    
    </div>
  )
}

export default Home
