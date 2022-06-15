import axios from 'axios'
import history from '../history'

// Action types

const SET_USERS = 'SET_USERS'

// Action creators 

const setUsers = (users) => ({
    type: SET_USERS,
    users
})

// Thunk Creator

export const fetchUsers = () => {
    return async(dispatch) => {
        try {
            const {data: users} = await axios.get('/api/users')
            dispatch(setUsers(users))
        } catch (error) {
            next(error)
        }
    }
}

// Reducer

export default function usersReducer(state = [], action) {
    switch (action.type) {
      case SET_USERS:
        return action.users
      default:
        return state
    }
  }