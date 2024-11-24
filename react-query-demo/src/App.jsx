import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <PostsComponent />
    </QueryClientProvider>
  );
};

export default App;
