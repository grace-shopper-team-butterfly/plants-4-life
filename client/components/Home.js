import React from 'react'
import {connect} from 'react-redux'


/**
 * COMPONENT
 */
export const Home = props => {
  const {username, isAdmin} = props
  console.log(username, isAdmin)
  return (
    <div>
      <h3>Welcome, {username}</h3>
      {isAdmin ? <div>
      <button>Users List</button>
    <button>Edit Products</button>
    <button>Add Product</button> 
    </div>:
    <button>View Order History</button>
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
