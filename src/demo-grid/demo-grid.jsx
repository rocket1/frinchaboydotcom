import React from 'react';
import DemoBox from '../demo-box/demo-box';
import { demoConfig } from '../demo-config.js';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import styles from "../demo-modal/demo-modal.module.less";

export const DemoGrid = ({ ready, demoBoxClick }) => {

  const getDemoBoxes = (projects, size) => {
    return projects.map((config, index) => {
      let bgColor = demoConfig.colors[index % demoConfig.colors.length];
      const props = { demoBoxClick, config, bgColor };
      if (size) {
        props.size = size;
      }
      // console.log('size:', size);
      return <DemoBox key={index} {...props} />
    });
  }

  const latest = demoConfig.projects.filter(p => p.latest);

  const past = demoConfig.projects.filter(p => !p.latest);

  // console.log('latest:', latest, 'past:', past);

  const latestBoxes = getDemoBoxes(latest);

  const pastBoxes = getDemoBoxes(past, 'small');

  const sizesLatest = [
    { columns: 1, gutter: 24 },
    { mq: '768px', columns: 2, gutter: 24 },
    { mq: '1200px', columns: 3, gutter: 24 },
    { mq: '1600px', columns: 4, gutter: 24 },
    { mq: '2000px', columns: 5, gutter: 24 },
  ];

  const gutterSmall = 12;

  const sizesPast = [
    { columns: 1, gutter: gutterSmall },
    { mq: '768px', columns: 4, gutter: gutterSmall },
    { mq: '1200px', columns: 6, gutter: gutterSmall },
    { mq: '1600px', columns: 8, gutter: gutterSmall },
    { mq: '2000px', columns: 10, gutter: gutterSmall },
  ];

  return ready ? (
    <div className={styles['demo-grid']}>
      <h2>Current Work</h2>
      {/*<MasonryInfiniteScroller*/}
      {/*  sizes={sizesLatest}*/}
      {/*  loadMore={() => false}>*/}
        {latestBoxes}
      {/*</MasonryInfiniteScroller>*/}
      {/*<br />*/}
      {/*<h2>Past Work</h2>*/}
      {/*<MasonryInfiniteScroller*/}
      {/*  sizes={sizesPast}*/}
      {/*  loadMore={() => false}>*/}
      {/*  {pastBoxes}*/}
      {/*</MasonryInfiniteScroller>*/}
    </div>
  ) : null;
}
