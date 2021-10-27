import React from 'react'
import { useHistory } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from "react-router-dom";

const Menu = ({ open, setCurrentUser }) => {
  const history = useHistory()

  const handleLogout = () => {
    fetch(`/logout`, {
    method: 'DELETE',
    credentials: 'include'
    })
    .then(res => {
        if (res.ok) {
        setCurrentUser(null)
        history.push('/')
        }
    })
  }

  return (
    <StyledMenu open={open}>
      <nav>

        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
        </nav>

        <br></br>
        <br></br>

        <nav>
          <NavLink exact to="/bookshelf">
            Bookshelf
          </NavLink>
        </nav>

        <br></br>
        <br></br>
        
        <nav>
          <NavLink exact to="/grimoires">
            Grimoires
          </NavLink>
        </nav>

        <br></br>
        <br></br>

        <nav>
          <NavLink exact to="/create_grimoire">
            Create Grimoire
          </NavLink>
        </nav>

        <nav id="logout" onClick={handleLogout}>
          Logout
        </nav>

      </nav>

    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;