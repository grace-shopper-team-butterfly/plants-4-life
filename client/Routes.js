import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store'
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import AllUsers from './components/AllUsers'
import Cart from './components/Cart'

import AdminAddBooks from './components/AdminAddBooks'
import AdminAllProducts from './components/AdminAllProducts'
import AdminUpdateBooks from './components/AdminUpdateBooks'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path='/forms/add'component={AdminAddBooks} />
            <Route path='/products/:id/forms/edit'component={AdminUpdateBooks} />
            <Route path='/products/adminproducts' component={AdminAllProducts} />
            <Route path='/products/:productId(\d+)' component={SingleProduct} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/home" component={Home} />
            <Route path='/users' component={AllUsers} />
            <Route path='/cart' component={Cart} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/products/:productId(\d+)' component={SingleProduct} />
            <Route path="/products" component={AllProducts} />
            <Route path='/' exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path='/cart' component={Cart} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
