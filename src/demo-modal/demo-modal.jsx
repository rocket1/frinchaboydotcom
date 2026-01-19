import cx from "classnames";
import React from 'react';
import styles from "./demo-modal.module.less";

export const DemoModal = ({ closeFunc, modalContent, modalTitle, bgColor }) => {
  const closeModal = (e) => {
    e.preventDefault();
    closeFunc();
  }

  const _lockScroll = () => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
  }

  const _unlockScroll = () => {
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
    document.body.style.overflow = 'auto';
  }

  if (modalContent) {
    _lockScroll();
  } else {
    _unlockScroll();
  }

  const className = cx(styles['demo-modal'], {
    [styles.show]: !!modalContent
  });

  return <div className={className} style={{ backgroundColor: bgColor }}>
    <div className="modal-wrapper">
      <div className="toolbar-wrapper">
        <div className="toolbar">
          <h2>{modalTitle}</h2>
          <a onClick={(e) => closeModal(e)} href="">
            {/*<Close />*/}
            X
          </a>
        </div>
      </div>
      <div className="body">
        {modalContent}
      </div>
    </div>
  </div>
};
