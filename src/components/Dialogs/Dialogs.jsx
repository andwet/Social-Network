import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// OLD

// const DialogItem = (props) => {
//   let path = '/dialogs/' + props.id;
//   return (
//     <div className={classes.dialog}>
//       <NavLink to={path}>{props.name}</NavLink>
//     </div>
//   )
// }

// const Message = (props) => {
//   return (
//     <div className={classes.dialog}>{props.messageUser}</div>
//   )
// }


// let dialogsElements = 
//   dialogsData.map (dialogBase => <DialogItem name={dialogBase.name} id={dialogBase.id} />);

// let messagesElements = 
//   messageData.map(messageBase => <Message messageUser={messageBase.message}/>);

// OLD


const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map (({name,id}) => <DialogItem name={name} id={id}/>);
  let messagesElements = props.messageData.map (({message}) => <Message messageUser={message}/> );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
       <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs; 