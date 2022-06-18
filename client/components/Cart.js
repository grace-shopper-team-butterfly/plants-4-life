import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, modifyProductInCart, sendCartCheckout, removeProductCart } from '../store/order_reducer'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      quantity: e.target.value
    })
  }


  render() {
    const { quantity } = this.state
    const { books } = this.props.cart
    const { handleChange } = this
    return (
      <div>
        <h1>Cart</h1>
        <div>
          {books ? books.map(book => {
            return (

              <div key={book.id}>
                <div>
                  <Link to={`/products/${book.id}`} key={book.id}>
                    <h1>{book.title}</h1>
                  </Link>
                  <img src={book.imageUrl} />
                  <p>Price: {book.price}</p>
                  <p>Quantity: {book.bookOrder.quantity}</p>
                  <form>
                    <input type="number" value={quantity} name="quantity" onChange={handleChange} min="0" />
                    <Button variant='contained' onClick={() => this.props.modifyProductInCart(book, quantity)}>Update Cart</Button>
                  </form>
                  <Button variant='contained' onClick={() => this.props.sendCartCheckout(this.props.cart)}>Checkout</Button>
                  <Button variant='contained' onClick={() => this.props.removeProductCart(book)}>Delete</Button>
                </div>
              </div>
            )
          }) : ''}
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    modifyProductInCart: (product, quantity) => dispatch(modifyProductInCart(product, quantity)),
    sendCartCheckout: (cart) => dispatch(sendCartCheckout(cart, history)),
    removeProductCart: (product) => dispatch(removeProductCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
