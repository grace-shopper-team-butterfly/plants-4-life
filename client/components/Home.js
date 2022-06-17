import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

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
      <Link to='/users' ><button>Users List</button></Link>
      <Link to='/products/adminproducts' ><button>Edit Products</button></Link>
      <Link to='/forms/add'><button>Add Product</button> </Link>
    </div>:
    <Link><button>View Order History</button></Link>
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
