import React from "react";
import { connect } from 'react-redux'
import { fetchProducts, removeProductThunk } from '../store/books_reducer'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Grid } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export class AdminAllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products } = this.props

    return (
      <Container >

        <Link to='/adminPage'>
          <Button variant="contained" color="secondary" sx={{ m: 2 }}>Back to Admin Page</Button>
        </Link>
        <Grid container justify='center' justifyContent='space-around' spacing={5} sx={{ my: 3 }}>
          {products.length ? products.map(product => {
            return (
              <Grid item key={product.id} xs={4} >
                <Card sx={{ maxWidth: 360, minWidth: 360, minHeight: 570, maxHeight: 570 }} display='block'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
                        <MenuBookOutlinedIcon />
                      </Avatar>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="300"
                    // maxwidth="300"
                    object-fit='cover'
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
                    <Button aria-label="delete" type="button" onClick={() => { this.props.removeProduct(product.id) }}>
                      <DeleteIcon />Delete
                    </Button>
                    <Link to={`/products/${product.id}/forms/edit`} key={product.id} >
                      <Button>
                        <EditIcon /> Edit
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

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    removeProduct: (product) => dispatch(removeProductThunk(product, history))
  }
}

export default connect(mapState, mapDispatch)(AdminAllProducts)
