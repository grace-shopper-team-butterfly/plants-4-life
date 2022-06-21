import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
                <Link to="/home"><Button color="inherit" startIcon={< HomeIcon />} size='large'>Home</Button></Link>
                <Link to='/products'><Button color="inherit" startIcon={< MenuBookIcon />}>Products</Button></Link>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Button color="inherit"><Link to="/login">Login</Link></Button>
                <Button color="inherit"><Link to="/signup">Sign Up</Link></Button>
                <Button color="inherit"><Link to='/products'>Products</Link></Button>
              </div>
            )}
          </div>
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
                        <MenuItem onClick={handleClick}>
                          Admin Profile
                        </MenuItem>
                        <Divider />
                      </div>
                      :
                      ''}
                    <MenuItem onClick={handleClick}>
                      Order History
                    </MenuItem>
                    {/* Add Profile to view email and username */}
                    <MenuItem onClick={handleClick}>
                      Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClick}>
                      <Link to='/products' style={{ textDecoration: 'none' }}>
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
      </AppBar>
    </Box>
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
