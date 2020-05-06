import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={classes.dialog}>{props.messageUser}</div>
  )
}

export default Message;