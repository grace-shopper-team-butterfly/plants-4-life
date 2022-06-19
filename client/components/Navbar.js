import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navbar = ({ handleClick, isLoggedIn }) => (

  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Story Time
        </Typography>

        <div>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home"><Button color="inherit" startIcon={< HomeIcon/>} size='large'>Home</Button></Link>
              <Link to='/products'><Button color="inherit" startIcon={< MenuBookIcon/>}>Products</Button></Link>
              <Link to='/cart'><Button color="inherit" startIcon={< ShoppingCartIcon/>} size='large'>Cart</Button></Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Button color="inherit"><Link to="/login">Login</Link></Button>
              <Button color="inherit"><Link to="/signup">Sign Up</Link></Button>
              <Button color="inherit"><Link to='/products'>Products</Link></Button>
              <Button color="inherit"><Link to='/cart'>Cart</Link></Button>
            </div>
          )}
        </div>


      </Toolbar>
    </AppBar>
  </Box>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
