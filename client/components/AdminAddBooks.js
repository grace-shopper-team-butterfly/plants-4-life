import React from "react";
import { connect } from 'react-redux'
import { addProductThunk } from "../store/books_reducer";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'

const initialState = {
  title: '',
  author: '',
  imageUrl: '',
  price: 0,
  discription: ''
}

export class AdminAddBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addProduct({ ...this.state })
    this.setState(initialState)

  }

  render() {
    const {
      title,
      author,
      imageUrl,
      price,
      discription
    } = this.state

    return (
      <div id='add-product'>
        <h2>Add New Product</h2>
        <Link to='/adminPage'>
          <Button variant="contained" color="secondary" sx={{ m: 2 }}>Back to Admin Page</Button>
        </Link>
        <form id="add-product-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleChange} name="title" value={title} />
          <label htmlFor="author">Author:</label>
          <input onChange={this.handleChange} name="author" value={author} />
          <label htmlFor="imageUrl">Image:</label>
          <input onChange={this.handleChange} name="imageUrl" value={imageUrl} />
          <label htmlFor="price">Price:</label>
          <input onChange={this.handleChange} name="price" value={price} />
          <label htmlFor="discription">Description: </label>
          <textarea onChange={this.handleChange} name="discription" value={discription} />
          <br></br>
          <Button variant="contained" color='secondary' type="submit" sx={{ mt: 2 }}>Submit</Button>
        </form>
      </div>
    )
  }
}


const mapState = (state) => ({
  newProduct: state.products.newProduct
})


const mapDispatch = (dispatch, { history }) => {
  return {
    addProduct: newProduct => dispatch(addProductThunk(newProduct, history))
  }
}

export default connect(null, mapDispatch)(AdminAddBooks)
