import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchOneProduct } from '../store/singleBook_reducer';

class SingleProduct extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchOneProduct(this.props.match.params.productId)
    }

    render() {
        const {product} = this.props
        console.log('product',this.props.product)
        if (!this.props.product) return <h1>Loading</h1>
        else {return (
            <div key={product.id}>
                <h1>{product.title}</h1>  
                <img src={product.imageUrl}/>   
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        )}
    } 
}

const mapStateToProps = (state) => {
    return {
        product: state.singleProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneProduct: (productId) => dispatch(fetchOneProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)