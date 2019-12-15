import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          Andrew
        </div>
        <div className={classes.dialog}>
          Dima
        </div>
        <div className={classes.dialog}>
          Ihor
        </div>
        <div className={classes.dialog}>
          Liza
        </div>
        <div className={classes.dialog}>
          Ivan
        </div>
        <div className={classes.dialog}>
          Pasha
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