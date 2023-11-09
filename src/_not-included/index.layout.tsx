import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <p>
      This is part of a nested layout, which is applied in addition to the main
      layout.
    </p>
    <p>
      This layout will apply to any pages within the _not-included directory.
    </p>
    {children}
  </>
);

export default Layout;
