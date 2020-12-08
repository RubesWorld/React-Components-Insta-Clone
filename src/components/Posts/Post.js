import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { postsData, likePostFunc } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={postsData.username}
        thumbnailUrl={postsData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={postsData.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePostFunc(postsData.id)} numberOfLikes={postsData.likes} />
      {/* Comments also wants its props! */}
      <Comments comments={postsData.comments} />
    </div>
  );
};

export default Post;
