import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'
import { TextField, Button } from '@mui/material'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} name={name}>
        {props.name === 'signup' ? <div>
        <TextField label="Email" name='email' variant="outlined" color='secondary' required/>
        </div> : ''}

        <div>
          <TextField label="UserName" name='username' variant="outlined" color='secondary' required/>
        </div>
        <div>
          <TextField label="Password"  name="password" variant="outlined" color='secondary' required/>
        </div>
        <div>
          <Button variant='contained' color='secondary' type="submit">{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapLoginDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

const mapSignupDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      const email = null || evt.target.email.value
      dispatch(authenticate(username, password, formName, email))
    }
  }
}

export const Login = connect(mapLogin, mapLoginDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapSignupDispatch)(AuthForm)
