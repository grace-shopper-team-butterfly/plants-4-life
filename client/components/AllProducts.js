import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/books_reducer';
import {Link} from 'react-router-dom';

export class AllProducts extends React.Component {
    constructor(){
      super()
      this.state = {
      }
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const products = this.props.products
        return (
            <div>
                <h1>Books</h1>
                <div className='allDisplay'>
                {products.length ? products.map(product => {
                    return (
                        <div className='singleProduct' key={product.id}>
                            <h1>{product.title}</h1>
                            <img src={product.imageUrl}/>
                            <p>{product.price}</p>
                        </div>
                    )
                }) : ''}
                </div>
            </div>
        )
    }
}





const mapStateToProps = (state) => {
    return {
      products: state.products
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts : () => dispatch(fetchProducts()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);