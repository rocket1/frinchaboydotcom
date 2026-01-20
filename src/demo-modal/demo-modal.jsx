import cx from "classnames";
import React, { useEffect } from 'react';
import styles from "./demo-modal.module.less";

export const DemoModal = ({ closeFunc, modalContent, modalTitle, bgColor }) => {
  useEffect(() => {

    const onKeydown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeFunc();
      }
    };

    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

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
    <div className={styles['modal-wrapper']}>
      <div className={styles['toolbar-wrapper']}>
        <div className={styles['toolbar']}>
          <h2>{modalTitle}</h2>
          <a onClick={(e) => closeModal(e)} href="">
            <button
              type="button"
              className={`${styles["close-icon"]} material-icons`}
              aria-label="Close modal"
              onClick={(e) => {
                e.preventDefault();
                closeFunc();
              }}
            >
              close
            </button>
          </a>
        </div>
      </div>
      <div className={styles['body']}>
        {modalContent}
      </div>
    </div>
  </div>
};
