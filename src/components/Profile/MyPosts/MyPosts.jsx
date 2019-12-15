import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
         <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={classes.posts}>
        <Post message='Hello, how are you?' like='24 '/>
        <Post message='Its my first post!' like='47 '/>
      </div>
    </div>
  )
}

export default MyPosts;