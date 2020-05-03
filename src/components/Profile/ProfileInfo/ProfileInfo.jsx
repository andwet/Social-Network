import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://cdn.shazoo.ru/309123_Qmr4VVrpmJ_screen_shot_2018_12_07_at_5_05_40_pm.jpg'></img>
      </div>
      <div className={classes.descriptionBlock}>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;