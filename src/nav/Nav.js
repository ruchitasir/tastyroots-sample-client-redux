import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../content/pages/Login'
import { Menu } from 'semantic-ui-react'

const Nav = props => {
  const handleLogout = e => {
    e.preventDefault()
    // TODO: Remove the token from localstorage (or cookies)
    // Update the state of the App
     props.updateToken()
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

  //  If the user is logged in, show profile page and logout links
  if(props.user){
    links = (
        <span>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <a href="/" onClick={handleLogout}>Logout</a>
          </li>
       </span>
    )
  }

  return (
    <nav>
      <ul>
        <li>{links}</li>
      </ul>
    </nav>
  )
}

export default Nav
