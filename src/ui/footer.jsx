import React from 'react';
import cx from 'classnames';
import Links from './links';
import styles from './footer.module.less';

const Footer = ({ ready }) => {
  const className = cx(styles['footer'], {
    [styles.show]: ready
  });

  return (
    <div className={className}>
      <Links />
    </div>
  )
}

export default Footer;


