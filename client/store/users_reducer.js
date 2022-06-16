import axios from 'axios'
import history from '../history'

// authorization
// const token = window.localStorage.getItem('token')
// const apiUrl= 'http://localhost:8080'

// const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// })

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
       
            const token = localStorage.getItem('token')
            const {data: users} = await axios.get(`/api/users/${token}`)
            dispatch(setUsers(users))
        
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