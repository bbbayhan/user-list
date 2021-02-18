
import '../App/App.css';
import React, {useCallback} from 'react';
import logo from '../../images/logo192.png';
import {useHistory} from 'react-router-dom';


function Header({ onClickHeader, userInfoHeader}) {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push('/about');
  }, [history]);

  
  return (
    <div class='header'>
        <img class='cloudAppi' src={logo} alt="female profile"/>
        <ul class='menu'>
            <li class='dropdown'><span>User List ▾</span>
              <ul class='features-menu'> 
                {userInfoHeader.map(user => {
                  return(
                  <li key={user.id} onClick={()=>onClickHeader(user)}>{user.name}</li>);
                })} 
              </ul>
            </li>
            <li onClick={handleClick}>
              About
            </li>
        </ul>
    </div> 
  );
}

export default Header;
