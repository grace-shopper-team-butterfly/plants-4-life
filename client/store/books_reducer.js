import axios from 'axios'
import history from '../history'

// Action types

const SET_PRODUCTS = 'SET_PRODUCTS'

// Action creators 

const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
})

// Thunk Creator 

export const fetchProducts = () => {
    return async(dispatch) => {
        try {
            const {data: products} = await axios.get('/api/products')
            dispatch(setProducts(products))
        } catch (error) {
            next(error)
        }
    }
}

// Reducer

export default function productsReducer(state = [], action) {
    switch (action.type) {
      case SET_PRODUCTS:
        return action.products
      default:
        return state
    }
  }
  
