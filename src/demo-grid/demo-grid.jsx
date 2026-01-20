import React from 'react';
import DemoBox from '../demo-box/demo-box';
import { demoConfig } from '../demo-config.js';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import styles from "../demo-modal/demo-modal.module.less";

export const DemoGrid = ({ ready, demoBoxClick }) => {

  const getDemoBoxes = (projects) => {
    return projects.map((config, index) => {
      let bgColor = demoConfig.colors[index % demoConfig.colors.length];
      return <DemoBox demoBoxClick={demoBoxClick} key={index} config={config} bgColor={bgColor} />
    });
  }

  const latest = demoConfig.projects.filter(p => p.latest);

  const past = demoConfig.projects.filter(p => !p.latest);

  console.log('latest:', latest, 'past:', past);

  const latestBoxes = getDemoBoxes(latest);

  const pastBoxes = getDemoBoxes(past);

  const sizes = [
    { columns: 1, gutter: 24 },
    { mq: '768px', columns: 2, gutter: 24 },
    { mq: '1200px', columns: 3, gutter: 24 },
    { mq: '1600px', columns: 4, gutter: 24 },
    { mq: '2000px', columns: 5, gutter: 24 },
  ];

  return ready ? (
    <div className={styles['demo-grid']}>
      <h2>Latest Work</h2>
      <MasonryInfiniteScroller
        sizes={sizes}
        loadMore={() => false}>
        {latestBoxes}
      </MasonryInfiniteScroller>
      <br />
      <h2>Past Work</h2>
      <MasonryInfiniteScroller
        sizes={sizes}
        loadMore={() => false}>
        {pastBoxes}
      </MasonryInfiniteScroller>
    </div>
  ) : null;
}
