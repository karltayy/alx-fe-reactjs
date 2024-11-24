import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'posts', // Query key
    fetchPosts,
    {
      cacheTime: 5 * 60 * 1000, // Cache the data for 5 minutes (default: 5 minutes)
      staleTime: 30 * 1000, // Mark data as fresh for 30 seconds (default: 0)
      refetchOnWindowFocus: true, // Refetch data when the window regains focus (default: true)
      keepPreviousData: true, // Keep previous data while fetching new data (default: false)
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={refetch}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
