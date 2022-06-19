import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/books_reducer';
import {Link} from 'react-router-dom';
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
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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
            <Container sx={{ paddingTop: 10 }}>
            <Grid container justify='center' display='flex' sx={{ padding: 14}}>
                {/* <h1>Books</h1> */}
                
                {products.length ? products.map(product => {
                    return (
                        <Link to={`/products/${product.id}`} key= {product.id} justify-content="space-between">
                        <Grid  item key={product.id} xs={12} >
                        <Card sx={{ maxWidth: 345 }} display='block'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
            <MenuBookOutlinedIcon/>
          </Avatar>
        }
      />
      <CardMedia
        component="img"
        height="300"
        maxWidth="300"
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
          Price: ${product.price / 100}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartIcon/>
        </IconButton>
        </CardActions>
        
    </Card>
                       
                       </Grid>
                       </Link>
                   )
               }) : ''}
               </Grid>
               </Container>
                          
            
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