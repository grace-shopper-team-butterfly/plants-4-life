import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

function Navbar({ handleClick, isLoggedIn, username, isAdmin }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href='/home'
          >
            {/* <MenuIcon /> */}
            <img src='android-chrome-512x512.png' style={{ maxHeight: '40px' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Story Time
          </Typography>

          <Button color="inherit"><Link to='/products'>Products</Link></Button>
          <div>
            <div>
              <IconButton
                href="/cart"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ShoppingCartRoundedIcon />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {isLoggedIn ?
                  <div>
                    {/* Add Order history to drop down */}
                    {isAdmin ?
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link to="/adminPage">
                            Admin Settings
                          </Link>
                        </MenuItem>
                        <Divider />
                      </div>
                      :
                      ''}
                    <MenuItem onClick={handleClose}>
                      <Link to='/orderHistory' style={{ textDecoration: 'none' }}>
                        Order History
                      </Link>
                    </MenuItem>
                    {/* Add Profile to view email and username */}
                    <MenuItem onClick={handleClose}>
                      <Link to="/profile" style={{ textDecoration: 'none' }}>
                        Profile
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClick}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      <Link to='/login' style={{ textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </MenuItem>
                  </div>
                  :
                  <div>
                    <MenuItem onClick={handleClose}>
                      <Link to="/signup" style={{ textDecoration: 'none' }}>
                        Sign Up
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        Login
                      </Link>
                    </MenuItem>
                  </div>
                }
              </Menu>
            </div>
          </div>

        </Toolbar>
      </AppBar >
    </Box >
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
    isAdmin: state.auth.isAdmin
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
