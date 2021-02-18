import '../../App/App.css';
import React from 'react';
import {pictures} from '../../../images';

function Profile({ profileInfo }){
  return (
    <div class='user-profile'>
      {profileInfo &&
        <>
        <div class='user-profile-header'>
            <img class='user-big-image' src={pictures[profileInfo.name]} alt="female profile"/>
            <h1 class='user-profile-name'>{profileInfo.name}</h1>
        </div>
        <div class='user-profile-content'>
          <p>About: A user is a person who utilizes a computer or network service. Users of computer systems and software products generally lack the technical expertise required to fully understand how they work. <em>Wikipedia</em><br></br>Email: daniela.diaz@example.com </p>
        </div>
        </>
      }    
    </div>
  );
}

export default Profile;