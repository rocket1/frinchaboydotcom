import React, { useEffect, useState } from 'react';
import { DemoGrid } from '../demo-grid/demo-grid';
import { DemoModal } from '../demo-modal/demo-modal';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';
import styles from './app.module.less';
import cx from 'classnames';
import headerImgSrc from "../../public/img/astoria-banner.jpg";
import WebFont from 'webfontloader';

export const App = () => {
  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [modalBgColor, setModalBgColor] = useState(null);
  const [contentReady, setContentReady] = useState(null);
  const [fontReady, setFontReady] = useState(null);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setContentReady(true);
    };

    img.src = headerImgSrc;

    WebFont.load({
      google: {
        families: ['Noto Sans', 'Merriweather', 'Material Icons']
      },
      active: () => {
        setFontReady(true);
      }
    });
  }, []);

  // @keydown('esc')
  const submit = (e) => {
    e.preventDefault();
    closeModal();
  }

  const openModal = (modalContent, modalTitle, bgColor) => {
    setModalBgColor(bgColor);
    setModalContent(modalContent);
    setModalTitle(modalTitle);
  }

  const closeModal = () => {
    setModalContent(null);
  }


  const ready = contentReady && fontReady;

  const bodyCx = cx(styles['app-body'], {
    [styles.show]: ready
  });

  return <React.Fragment>
    <Footer ready={ready} />
    <DemoModal modalTitle={modalTitle} modalContent={modalContent} closeFunc={closeModal} bgColor={modalBgColor} />
    <div className={bodyCx}>
      <Header openModal={openModal} />
      <div className={styles['content']}>
        <div className={styles['content-inner']}>
          <DemoGrid ready={ready} demoBoxClick={openModal} />
        </div>
      </div>
    </div>
  </React.Fragment>
}


