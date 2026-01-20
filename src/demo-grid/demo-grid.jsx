import React from 'react';
import DemoBox from '../demo-box/demo-box';
import { demoConfig } from '../demo-config.js';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import styles from "../demo-modal/demo-modal.module.less";

export const DemoGrid = ({ready, demoBoxClick}) => {

  const _demoBoxes = demoConfig.projects.map((config, index) => {
    let bgColor = demoConfig.colors[index % demoConfig.colors.length];
    return <DemoBox demoBoxClick={demoBoxClick} key={index} config={config} bgColor={bgColor} />
  });

  const sizes = [
    { columns: 1, gutter: 24 },
    { mq: '768px', columns: 2, gutter: 24 },
    { mq: '1200px', columns: 3, gutter: 24 },
    { mq: '1600px', columns: 4, gutter: 24 },
    { mq: '2000px', columns: 5, gutter: 24 },
  ];

  return ready ? (
    <div className={styles['demo-grid']}>
      <MasonryInfiniteScroller
        sizes={sizes}
        loadMore={() => false}>
        {_demoBoxes}
      </MasonryInfiniteScroller>
    </div>
  ) : null;
}
