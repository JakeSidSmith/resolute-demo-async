import React from 'react';

export const hydrate = false;

const AvoidHydration = () => (
  <p>This content is only rendered on the client.</p>
);

export default AvoidHydration;
