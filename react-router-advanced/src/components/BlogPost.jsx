import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Blog Post {postId}</div>;
}

export default BlogPost;
