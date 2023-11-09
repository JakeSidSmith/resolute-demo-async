import React, { PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider } from 'react-jss';

import Navbar from './components/navbar.js';

const THEME: DefaultTheme = {
  red: '#ff0000',
};

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <p>This is part of the main layout</p>
    {children}
  </>
);

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={THEME}>
      <Navbar />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default Providers;
