import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Accessing the dynamic "id" parameter
  return <div>Displaying Blog Post with ID: {id}</div>;
}

export default BlogPost;
