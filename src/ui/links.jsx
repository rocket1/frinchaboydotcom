import React from 'react';
import { About } from "../about.jsx";
import styles from './links.module.less';

export const Links = ({ openModal }) => {
  const clickAboutLink = (e) => {
    e.stopPropagation();
    openModal(<About />, 'Jason Frinchaboy');
  }

  return <div className={styles['links']}>
    <a target="_blank" href="/jason-frinchaboy-resume.pdf">R‌ésum‌é</a>
    <a target="_blank" href="https://www.linkedin.com/in/jason-frinchaboy-53207a52/">Linkedin</a>
    <a href onClick={clickAboutLink}>About</a>
  </div>;
};


