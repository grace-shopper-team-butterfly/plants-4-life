import React from 'react';
import { connect } from 'react-redux';
import { fetchOrderHistory } from '../store/orderHistory_reducer';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


class OrderHistory extends React.Component {
    constructor() {
      super()
      this.state = {open: false}
      this.handleOpen = this.handleOpen.bind(this)
    }

    componentDidMount() {
        this.props.fetchOrders()
      }

    handleOpen(par){
        this.setState({
            open: par
        })
    }

    render(){
        const { orders } = this.props
        let open = this.state.open
        return(
            <div>

            <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Order Confirmation Number</TableCell>
                  <TableCell align="left">Order Date</TableCell>
                  <TableCell align="left">Order Purchase Total</TableCell>
        
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                //   <Row key={order.id} row={row} />
                
                    <React.Fragment>
                      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => this.handleOpen(!open)}
                          >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </TableCell>
                        <TableCell align="left">{order.id}</TableCell>
                        <TableCell align="left">{order.orderDate.slice(0,10)}</TableCell>
                        <TableCell align="left">${order.purchaseTotal/100}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Typography variant="h6" gutterBottom component="div">
                                Order Details
                              </Typography>
                              <Table size="small" aria-label="purchases">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Book Title</TableCell>
                                    <TableCell>Book Cover</TableCell>
                                    <TableCell align="right">Book Price</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {orders[index].books.map((book) => (
                                    <TableRow key={book.id}>
                                      <TableCell component="th" scope="row">
                                        {book.title}
                                      </TableCell>
                                      <TableCell><img src={book.imageUrl}/></TableCell>
                                      <TableCell align="right">${book.price / 100}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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