import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users_reducer';
import {Link} from 'react-router-dom';
import {
  Box,
  ButtonGroup,
  Button,
  Card,
  CardMedia,
  IconButton,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';


export class AllUsers extends React.Component {
    constructor(){
      super()
      this.state = {
      }
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const users = this.props.users
        console.log(users, 'USER')
        return (
            <div>
                <h2>All Users</h2>
                <Grid item md={9} xs={12}>
              <TableContainer component={Paper}></TableContainer>
              <Table sx={{ minWidth: 500, maxWidth: 600 }} size='medium'>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" >Username</TableCell>
                      <TableCell align="center">User's Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                
                {users[0] ? users.map(user => {
                    return (
                      <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{user.username}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                  
                        </TableRow>
                    )
                }) : 'Not Authorized'}
                </Table>
             </Grid>
            </div>
        )
    }
}





const mapStateToProps = (state) => {
    return {
      users: state.users
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers : () => dispatch(fetchUsers()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);