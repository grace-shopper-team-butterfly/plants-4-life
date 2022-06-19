import React from 'react';
import { connect } from 'react-redux';
import { fetchOrderHistory } from '../store/orderHistory_reducer';
import { Link } from 'react-router-dom';


class OrderHistory extends React.Component {
    constructor() {
      super()
      this.state = {}
    }

    componentDidMount() {
        this.props.fetchOrders()
      }

    render(){
        const { orders } = this.props
        console.log('orders', orders)
        return(
            <div>
                <h2>Order History</h2>
                <div>
                    { orders[0] ? orders.map(order => {
                        return (
                            <div key={order.id}> 
                                <p>Confirmation Number:{order.id}</p>
                                {/* <p>Order Date: {order.orderDate.slice(0,10)}</p> */}
                                <p>Purchase Total: ${order.purchaseTotal / 100}</p>
                                {order.books.map(book => {
                                    return (
                                        <div key={book.id}>
                                            <img src={book.imageUrl}/>
                                            <p>${book.price / 100}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }) : 'No past orders'

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      orders: state.orders
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
     fetchOrders: () => dispatch(fetchOrderHistory())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)