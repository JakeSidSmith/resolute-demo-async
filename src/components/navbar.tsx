import { Link, LinkProps } from '@blinkorb/resolute';
import React, { PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  link: {
    color: theme.red,
  },
}));

const StyledLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  const styles = useStyles();

  return (
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const styles = useStyles();

  return (
    <nav className={styles.navbar}>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/async-component-and-api/">
        Async component and API
      </StyledLink>
      <StyledLink href="/markdown/">Markdown</StyledLink>
    </nav>
  );
};

export default Navbar;
