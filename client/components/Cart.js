import React from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/order_reducer'
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {

    const { books } = this.props.cart
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
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
