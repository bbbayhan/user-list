import '../../App/App.css';
import React from 'react';
import picture from '../../../images/icon-user.svg'


function ListBar({listInfo, onClickListBar}){
  return (
    <div class='user-list-bar'>
      <h2 class='userlist-header'>User List</h2>
      {listInfo && listInfo.map(info => {
        return(
         <li class='userlist-icon' onClick={()=>onClickListBar(info.id)}>
          <img class='usericon' src={picture} alt="female profile"/>
          <h4 class='userlist-name'>{info.name}</h4>
          </li>);
        })}
    </div>
  );
}

export default ListBar;