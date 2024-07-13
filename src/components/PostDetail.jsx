import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { url } = useParams();
  const post = posts.find(p => p.url === url);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetail;
