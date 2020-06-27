// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Provider } from 'react-redux'
import store from './redux/store/store'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Nav from './nav/Nav'
import UserComponent from './content/components/UserComponent';
import LikeRecipe from './content/components/LikeRecipe';

const App = props => {
  // Declare state variables
  let [user, setUser] = useState(null)

  // useEffect hook (on load)
  useEffect(()=>{
    decodeToken()
  },[]) // Empty array, meaning only run this on page load

  const decodeToken= ()=>{
    let token = localStorage.getItem('boilerToken')

    if(token){
      // Decrypt the user data from the token
        let decodedUser = jwtDecode(token)
      // If the token is not valid or the expiration date has passed, user stays logged out
      if(!decodedUser || Date.now() > decodedUser.exp * 1000){
          console.log("expired or bad token")
          setUser(null)
      } 
      else{
        // User is valid, token is good
        console.log('User and token are good!')
        setUser(decodedUser)
      } 
    }
    else{
      // no user logged in
      console.log('There was no token')
      setUser(null)
    }
  }

  const updateToken=(newToken)=>{
    // Set the new tokem into localStorage
    localStorage.setItem('boilerToken',newToken || '')
    
    // Update the state (basically the user info)
    decodeToken()
  }

  return (
    <Provider store={store}> 
      <Router>
        <div className="App">
          <Nav user={user} updateToken={updateToken}/>
          <main>
            <Content user={user} updateToken={updateToken}/>
          </main>
          <Footer />
        </div>
      </Router>
      {/* <UserComponent/>
      <LikeRecipe/> */}
    </Provider>
  )
}

export default App
