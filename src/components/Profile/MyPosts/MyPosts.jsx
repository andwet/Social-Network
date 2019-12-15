import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hello, how are you?' like='24 '/>
        <Post message='Its my first post!' like='47 '/>
      </div>
    </div>
  )
}

export default MyPosts;