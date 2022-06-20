import axios from 'axios'
import history from '../history'

// Action types
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const MODIFY_CART = 'MODIFY_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'
const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART'

// Action creators
const setOrder = (cart) => ({
  type: SET_CART,
  cart
})

const addProduct = (cart) => ({
  type: ADD_TO_CART,
  cart
})

const modifyProduct = (cart) => ({
  type: MODIFY_CART,
  cart
})

const checkoutCart = (cart) => ({
  type: CHECKOUT_CART,
  cart
})

const removeProductFromCart = (cart) => ({
  type: REMOVE_PRODUCT_CART,
  cart
})

// Thunk Creator
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (token != null){
      const { data: cart } = await axios.get(`/api/orders/${token}`)
      console.log('cart api', cart)
      dispatch(setOrder(cart))
      }
      else {
        const jsonValue = localStorage.getItem('cart')
        const cart = JSON.parse(jsonValue)
        console.log('cart', cart)
        dispatch(setOrder({books: cart }))
      }
      // dispatch(setOrder(cart))
      

    } catch (error) {
      console.log(error)
    }
  }
}

export const addProductToCart = (product, history) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (token != null){
      const { data } = await axios.put(`/api/products/addCart/${product.id}`, { token: token })
      dispatch(addProduct(data))}
      else {
        const jsonValue = localStorage.getItem('cart')
        if (jsonValue != null) {
          const cart = JSON.parse(jsonValue)
          const cartWithProduct = cart.filter(item => item.id === product.id)
          if (cartWithProduct[0]){
            let index = cart.indexOf(cartWithProduct[0])
          
            cart[index].bookOrder = {
              quantity: cart[index].bookOrder.quantity + 1,
              subTotal: (cart[index].bookOrder.quantity + 1 )* cart[index].price
            }
        
            localStorage.setItem('cart', JSON.stringify(cart))
          }
          else { 
            product.bookOrder={quantity : 1, subTotal: product.price}
            cart.push(product)
          localStorage.setItem('cart', JSON.stringify(cart))
          }
        }
        else{ 
          product.bookOrder={quantity : 1, subTotal: product.price}
          localStorage.setItem('cart', JSON.stringify([product]))}
      }
      history.push('/cart')
    } catch (error) {
      console.log(error)
    }
  }
}

export const modifyProductInCart = (product, quantity, history) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.put(`/api/orders/modifyCart/${product.id}/${quantity}`, {}, {
        headers: {
          authorization: token
        }
      })
      dispatch(modifyProduct(data))
      history.push('/cart')
    } catch (error) {
      console.log(error)
    }
  }
}

export const sendCartCheckout = (cart, history) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.put(`/api/orders/checkout/${cart.id}`, {}, {
        headers: {
          authorization: token
        }
      })
      dispatch(checkoutCart(data))
      history.push('/home')
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeProductCart = (product) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    const { data } = await axios.delete(`/api/orders/${product.id}`, {
      headers: {
        authorization: token
      }
    })
    dispatch(removeProductFromCart(data))
  }
}

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    case MODIFY_CART:
      return action.cart
    case CHECKOUT_CART:
      return action.cart
    case REMOVE_PRODUCT_CART:
      return action.cart
    default:
      return state
  }
}
