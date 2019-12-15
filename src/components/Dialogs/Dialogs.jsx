import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return(
    <div className={classes.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Andrew' id='1' />
        <DialogItem name='Dima' id='2' />
        <DialogItem name='Ihor' id='3' />
        <DialogItem name='Liza' id='4' />
        <DialogItem name='Ivan' id='5' />
        <DialogItem name='Pasha' id='6' />
      </div>

      <div className={classes.messages}>
        <Message message='Hello'/>
        <Message message='What is your name'/>
        <Message message='Yo'/>
        <Message message='Yo'/>
        <Message message='Yo'/>
      </div>
    </div>
  )
}

export default Dialogs; 