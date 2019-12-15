import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div>
      <div>
        <img src='http://www.talencia.cat/mypics/max/15/157792_vaporwave-steam-backgrounds.jpg'></img>
      </div>
      <div>Ava+Description</div>
      <MyPosts/>
    </div>
  )
}

export default Profile;