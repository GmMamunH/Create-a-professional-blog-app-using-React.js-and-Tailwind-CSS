import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostList = ({ posts }) => {
  const { category } = useParams();
  const filteredPosts = category ? posts.filter(post => post.category.toLowerCase() === category.toLowerCase()) : posts;

  return (
    <div className="p-4">
      {filteredPosts.map(post => (
        <div key={post.id} className="border-b mb-4 pb-4">
          <h2 className="text-2xl font-bold">
            <Link to={`/post/${post.url}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default PostList;
