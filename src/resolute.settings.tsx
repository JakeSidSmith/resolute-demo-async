import { ResoluteSettings } from '@blinkorb/resolute';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Components } from 'react-markdown';

const useStyles = createUseStyles({
  em: {
    fontStyle: 'italic',
    color: 'red',
  },
});

const CustomEm: Components['em'] = ({ children }) => {
  const styles = useStyles();

  return <em className={styles.em}>{children}</em>;
};

const settings: ResoluteSettings = {
  helmet: {
    defaultTitle: 'Default Demo Title',
    titleTemplate: '%s | Demo',
  },
  markdown: {
    components: {
      em: CustomEm,
    },
  },
};

export default settings;
