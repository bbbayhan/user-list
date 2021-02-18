import '../App/App.css';
import React from 'react';
import ListBar from './ListBar';
import Profile from './Profile';


function UserLister({userSelected,userInfoLister,onClickBar}){
  return (
    <div class='user-lister-page'>
      <ListBar onClickListBar={onClickBar} listInfo={userInfoLister}></ListBar>
      <Profile profileInfo={userSelected}></Profile>
    </div>
  );
}

export default UserLister;