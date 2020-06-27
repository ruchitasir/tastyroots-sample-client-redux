import React, { FormEvent } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import Login from './Login'


const Nav = (props) => {
  const handleLogout = (e) => {
    e.preventDefault()
    // Remove the token from local storage (or cookies)
    props.updateToken('')
    localStorage.removeItem('boilerToken')
    return <Redirect to="/" />
  }

  var links = (
    <Menu pointing secondary className="top-nav">
      <Menu.Item
        name='Home'
        as={Link} to="/"
      />
      <Login user={props.user} updateToken={props.updateToken} />
    </Menu>
  )

  // If the user is logged in, show profile page and logout links
  if (props.user) {
    links = (
      <Menu pointing secondary className="top-nav">
        <Menu.Item
          name='Home'
          href="/"
        /> 
        <Menu.Menu position='right'>
          <Menu.Item
            name='Profile'
            as={Link} to="/profile"
          />
          <Menu.Item
            name='Family Circles'
            as={Link} to="/familycircle"
          />
          <Menu.Item
            name='Recipes'
            as={Link} to="/recipes"
          />
          <Menu.Item
            name='Logout'
            as={Link} to="/"
            onClick={handleLogout}
          />
        </Menu.Menu>
      </Menu>
    )
  }

  return (
    <div>
      {links}
    </div>

  )
}

export default Nav
