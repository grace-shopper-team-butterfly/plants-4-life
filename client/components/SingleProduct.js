import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOneProduct } from '../store/singleBook_reducer';
import { addProductToCart } from '../store/order_reducer'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';


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
                // <div key={product.id}>
                //     <h1>{product.title}</h1>
                //     <img src={product.imageUrl} />
                //     <p>{product.description}</p>
                //     <p>${product.price / 100}</p>
                //     <button onClick={() => this.handleAddToCart(product)}>Add to cart</button>
                <Grid container padding={20} justify='center'>
                <Card sx={{ maxWidth: 600}} justifyContent="center">
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <MenuBookOutlinedIcon/>
                    </Avatar>
                  }
                />
                <CardMedia
                  component="img"
                  height='600'
                //   maxWidth='100%'
                  object-fit= 'cover' 
                  image={product.imageUrl}
                />
                <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {product.title}
                  </Typography>
                  <Typography variant="p" color="text.secondary">
                    {product.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: ${product.description}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: ${product.price / 100}
                  </Typography>
                </CardContent>
                <CardActions >
                  <IconButton onClick={() => this.handleAddToCart(product)} aria-label="share">
                    <ShoppingCartIcon/> Add to Cart
                  </IconButton>
                  </CardActions>
                  
              </Card>
              </Grid>
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
