import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://avatarfiles.alphacoders.com/170/170116.jpg'></img>
      {props.message}
      <div>
        {props.like}<span>Like</span>
      </div>
    </div>
  )
}

export default Post;