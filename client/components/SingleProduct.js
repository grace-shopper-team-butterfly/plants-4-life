import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOneProduct } from '../store/singleBook_reducer';
import { addProductToCart } from '../store/order_reducer'

class SingleProduct extends React.Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchOneProduct(this.props.match.params.productId)
    }

    handleAddToCart(product) {
        this.props.addProductToCart(product)
    }

    render() {
        const { product } = this.props
        if (!this.props.product) return <h1>Loading</h1>
        else {
            return (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <img src={product.imageUrl} />
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => this.handleAddToCart(product)}>Add to cart</button>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.singleProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneProduct: (productId) => dispatch(fetchOneProduct(productId)),
        addProductToCart: (product) => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
