import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, postsData } = props

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    {postsData.map((postObj)=>{
      return <Post
      key={postObj.id}  
      postsData={postObj}
      likePost={likePost}  
        />
    })
  }
    
      </div>
  );
};

export default Posts;
