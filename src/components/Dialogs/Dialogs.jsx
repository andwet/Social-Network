import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/1'>Andrew</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/2'>Dima</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/3'>Ihor</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/4'>Liza</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/5'>Ivan</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/6'>Pasha</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.dialog}>Hello</div>
        <div className={classes.dialog}>What is you name </div>
      </div>
    </div>
  )
}

export default Dialogs; 