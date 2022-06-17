import axios from 'axios'

// Action types

const SET_ORDERHISTORY = 'SET_ORDERHISTORY'

// Action creators

const setOrderHistory = (orders) => ({
    type: SET_ORDERHISTORY ,
    orders
  })

// Thunk creator

export const fetchOrderHistory = () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem('token')
        const { data: orders } = await axios.get(`/api/orders/orderHistory/${token}`)
        dispatch(setOrderHistory(orders))
      } catch (error) {
        console.log(error)
      }
    }
  }

// Reducer

export default function orderHistoryReducer(state = [], action) {
    switch (action.type) {
      case SET_ORDERHISTORY:
          return action.orders
      default:
        return state
    }
  }
  
