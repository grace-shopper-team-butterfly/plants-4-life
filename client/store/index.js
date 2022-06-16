import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import productsReducer from './books_reducer'
import singleBookReducer from './singleBook_reducer'
import usersReducer from './users_reducer'
import cartReducer from './order_reducer'

const reducer = combineReducers({
  auth: auth,
  products: productsReducer,
  singleProduct: singleBookReducer,
  users: usersReducer,
  cart: cartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
