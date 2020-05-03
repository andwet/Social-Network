import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hello, how are you?', likesCount: 28},
    {id: 2, message: 'Its my first post!', likesCount: 12}
  ]

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
         <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={classes.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;