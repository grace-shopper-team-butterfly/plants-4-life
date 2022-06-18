import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username, isAdmin} = props
  return (
    <div>
      <h3>Welcome, {username}</h3>
      {isAdmin ? <div>
        <h2>Admin's Page</h2>
      <Link to='/users' ><Button variant='contained' color='secondary'>Users List</Button></Link>
      <Link to='/products/adminproducts' ><Button variant='contained' color='secondary'>Edit Products</Button></Link>
      <Link to='/forms/add'><Button variant='contained' color='secondary'>Add Product</Button> </Link>
    </div>:
    <Link to='/orderHistory' ><Button variant='contained' color='secondary'>View Order History</Button></Link>
  }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapState)(Home)
