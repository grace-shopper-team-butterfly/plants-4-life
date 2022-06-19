import React from "react";
import { connect } from 'react-redux'
import {fetchProducts, removeProductThunk} from '../store/books_reducer'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
import DeleteIcon from '@mui/icons-material/Delete';
import { spacing } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';


export class AdminAllProducts extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProducts()
  }

  render() {
    const {products} = this.props
    console.log(this.props.removeProduct, 'DELETE')
    return(
  //     <div>
  //     <h1>Books</h1>
  //     <div className='allDisplay'>
  //     {products.map(product => (
  //         <div key={product.id}>
  //             <Link to={`/products/${product.id}/forms/edit`} key= {product.id}>
  //             <div className='singleProduct' key={product.id}>
  //                 <h1>{product.title}</h1>
  //                 <img src={product.imageUrl}/>
  //                 <p>${product.price / 100}</p>
  //             </div>
  //             </Link>
  //             <Button variant='contained' color='secondary' type="button" onClick={() => {this.props.removeProduct(product.id)}}>Delete</Button>
  //         </div>
  //     ))}
  //     </div>
  // </div>
  <Container >
    <h1>All Books</h1>
            <Grid container justify='center' justifyContent='space-around' spacing={5} sx={{my: 3}}>
                {products.length ? products.map(product => {
                    return (
                        <Grid  item key={product.id} xs={4} >
                        <Card sx={{ maxWidth: 345, minWidth: 345}} display='block'>
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
                            // maxWidth="300"
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
                            <Button aria-label="delete"  type="button" onClick={() => {this.props.removeProduct(product.id)}}>
                              <DeleteIcon/>Delete
                            </Button>
                            <Link to={`/products/${product.id}/forms/edit`} key= {product.id} >
                              <Button>
                                <EditIcon/> Edit
                              </Button>
                            </Link>
                            </CardActions>
                        </Card>
                                          
                       </Grid>
                      //  </Link>
                   )
               }) : ''}
               </Grid>
               </Container>
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
