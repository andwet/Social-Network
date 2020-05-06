import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postsElements = 
    props.posts.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>);

    // let postsElements = 
  //   posts.map(postsBase => <Post message={postsBase.message} likesCount={postsBase.likesCount}/>);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
         <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={classes.posts}>
        { postsElements }

        {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
        <Post message={posts[1].message} likesCount={posts[1].likesCount}/> */}
      </div>
    </div>
  )
}

export default MyPosts;