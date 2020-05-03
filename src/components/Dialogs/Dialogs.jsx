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

let dialogsData = [
  {id: 1, name: 'Andrew'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Ihor'},
  {id: 4, name: 'Liza'},
  {id: 5, name: 'Ivan'},
  {id: 6, name: 'Pasha'},
]

let messageData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'What is your name?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yp'},
  {id: 6, message: 'Yo'},
]


const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>

      <div className={classes.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
      </div>
    </div>
  )
}

export default Dialogs; 