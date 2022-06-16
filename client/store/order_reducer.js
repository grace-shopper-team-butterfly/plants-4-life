import axios from 'axios'

// Action types
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

// Action creators
const setOrder = (cart) => ({
  type: SET_CART,
  cart
})

const addProduct = (cart) => ({
  type: ADD_TO_CART,
  cart
})

// Thunk Creator
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const { data: cart } = await axios.get(`/api/orders/${token}`)
      dispatch(setOrder(cart))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addProductToCart = (product) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.put(`/api/products/addCart/${product.id}`, { token: token })
      dispatch(addProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    default:
      return state
  }
}
