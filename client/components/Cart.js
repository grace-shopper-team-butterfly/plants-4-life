import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, modifyProductInCart } from '../store/order_reducer'
import { Link } from 'react-router-dom';

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
                    <button onClick={() => this.props.modifyProductInCart(book, quantity)}>Update Cart</button>
                  </form>
                  <button>Checkout</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    modifyProductInCart: (product, quantity) => dispatch(modifyProductInCart(product, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
