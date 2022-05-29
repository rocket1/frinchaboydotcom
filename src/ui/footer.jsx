import React from 'react';
import cx from 'classnames';
import styles from './footer.less';
import Links from './links';

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


