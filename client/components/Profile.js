import React from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@mui/material'

const Profile = (props) => {
  console.log(props)
  return (

    <div style={{ display: 'block' }}>
      <h1>Profile</h1>
      <TextField
        disabled
        id="outlined-disabled"
        label="Username"
        defaultValue={props.username}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Email"
        defaultValue={props.email}
      />
    </div>
  )
}

const mapState = state => {
  return {
    username: state.auth.username,
    email: state.auth.email,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapState)(Profile)

