// Packages
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Input, Menu } from 'semantic-ui-react'

const Login = props => {
  // Declare and initialize state variables
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')
  let [password, setPassword] = useState('')

  // Event handlers
  const handleSubmit = e => {
    e.preventDefault()
    console.log("submit", email, password)
    //  Fetch call to POST data
    fetch(process.env.REACT_APP_SERVER_URL+ 'auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(response =>{
        console.log('RESPONSE',response)
        // Handle non-200 responses
        if(!response.ok){
          setMessage(`${response.status}: ${response.statusText}`)
          return
        }
        // we get a good (200) response, get the token
        response.json().then(result=>{
          console.log("Result ",result)
          // Giving the token back up to App.js
          props.updateToken(result.token)
        })
        
    })
    .catch(err=>{
        console.log('ERROR SUBMITTING',err)
    })

  }
    if(props.user){
      return <Redirect to="/profile"/>
    }


  return (
    <Menu.Menu position='right'>
    <Form size={"tiny"} onSubmit={handleSubmit}>
      <Form.Group className="login-fields" inline>
      <Menu.Item>
        <Input label="Email" onChange={(e) => setEmail(e.target.value)}/>
      </Menu.Item>
      <Menu.Item>
        <Input label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
      </Menu.Item>
      <Menu.Item>
      <Button color="orange" size={"tiny"} content="Login" icon="sign-in" labelPosition="right" type="submit"/>
      </Menu.Item>
      </Form.Group>
    </Form>
  </Menu.Menu>
  )
}

export default Login
