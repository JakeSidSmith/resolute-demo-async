import { createAPI } from '@blinkorb/resolute';
import React from 'react';

const fetch = createAPI<typeof import('./index.api.js')>(
  '/async-component-and-api'
);

const AsyncComponent = async () => {
  const { example } = await fetch('getExampleRequest');

  return <p>{example}</p>;
};

export default AsyncComponent;
