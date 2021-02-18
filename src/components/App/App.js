import './App.css';
import Header from '../Header';
import UserLister from '../UserLister';
import UserService from '../../UserService';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const userService = new UserService({
    apiUrl: "https://my-user-manager.herokuapp.com"
  });

  useEffect(() => {
    async function fetchData() {
      const userlist = await userService.getUsers();
      setUsers(userlist);
    }
    fetchData();
  }, []);

  const handleClick = (id) =>{
    const user = users.find(user => user.id === id);
    setSelectedUser(user);
  }

  return (
    <div className="app">
      <Header onClickHeader={handleClick} userInfoHeader={users}/>
      <UserLister onClickBar={handleClick} userInfoLister={users} userSelected={selectedUser}/>
    </div>
  );
}

export default App;
