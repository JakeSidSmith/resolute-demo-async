import React from 'react';
import { Helmet } from 'react-helmet';

const ReactHelmet = () => (
  <>
    <h1>This page uses react-helmet to set the title</h1>
    <Helmet>
      <title>This title was set with react-helmet</title>
    </Helmet>
  </>
);

export default ReactHelmet;
