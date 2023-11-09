import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <p>
      This is part of a nested layout, which is applied in addition to the main
      layout.
    </p>
    {children}
  </>
);

export default Layout;
