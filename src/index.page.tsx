import React from 'react';

import Counter from './components/counter.js';

export const title = 'Home';
export const ogDescription = 'This is the home page';

const Home = () => {
  return (
    <>
      <h1>Hello, Async!</h1>
      <p>This is the home page</p>
      <Counter />
    </>
  );
};

export default Home;
