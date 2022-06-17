import React from "react";
import { connect } from 'react-redux'
import {fetchProducts, removeProductThunk} from '../store/books_reducer'
import { Link } from "react-router-dom";

export class AdminAllProducts extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProducts()
  }

  render() {
    const {products} = this.props
    return(
      <div>
      <h1>Books</h1>
      <div className='allDisplay'>
      {products.map(product => (
          <div key={product.id}>
              <Link to={`/products/${product.id}/forms/edit`} key= {product.id}>
              <div className='singleProduct' key={product.id}>
                  <h1>{product.title}</h1>
                  <img src={product.imageUrl}/>
                  <p>${product.price / 100}</p>
              </div>
              </Link>
              <button type="button" onClick={() => {this.props.removeProduct(product.id)}}>Delete</button>
          </div>
      ))}
      </div>
  </div>
    )
  }
}

const mapState = (state) => {
  return {

    products: state.products

  }
}

const mapDispatch = (dispatch, {history}) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    removeProduct: (product) => dispatch(removeProductThunk(product, history))
  }
}

export default connect(mapState, mapDispatch)(AdminAllProducts)
