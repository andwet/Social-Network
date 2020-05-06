import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hello, how are you?', likesCount: 28},
  {id: 2, message: 'Its my first post!', likesCount: 12},
  {id: 3, message: 'Its my first post!', likesCount: 12},
  {id: 4, message: 'Its my first post!', likesCount: 12}
] 

let dialogsData = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Ihor' },
  { id: 4, name: 'Liza' },
  { id: 5, name: 'Ivan' },
  { id: 6, name: 'Pasha' },
]

 let messageData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'What is your name?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yp' },
  { id: 6, message: 'Yo' },
]

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
