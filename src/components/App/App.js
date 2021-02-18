import './App.css';
import Header from '../Header';
import UserLister from '../UserLister';
import UserService from '../../UserService';
import { connect } from 'react-redux';
import { selectUser } from '../../actions';
import React, { useState, useEffect } from 'react';

function App(props) {
  const [users, setUsers] = useState([]);

  const userService = new UserService({
    apiUrl: "https://my-user-manager.herokuapp.com"
  });

  useEffect(() => {
    async function fetchData() {
      const userlist = await userService.getUsers();
      setUsers(userlist);
    }
    fetchData();
  });

  return (
    <div className="app">
      <Header onClickHeader={props.selectUser} userInfoHeader={users}/>
      <UserLister onClickBar={props.selectUser} userInfoLister={users} userSelected={props.selectedUser}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {selectedUser: state.selectedUser};
}
export default connect(mapStateToProps, { selectUser })(App);