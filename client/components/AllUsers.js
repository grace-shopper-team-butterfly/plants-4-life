import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users_reducer';
import {Link} from 'react-router-dom';

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
        return (
            <div>
                <h1>All Users</h1>
                <div className='allDisplay'>
                {users[0] ? users.map(user => {
                    return (
                        <div className='singleProduct' key={user.id}>
                            <p>{user.username}</p>
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
      users: state.users
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers : () => dispatch(fetchUsers()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);