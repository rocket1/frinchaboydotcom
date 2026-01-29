import React from 'react';
import cx from 'classnames';
import styled from 'styled-components'
import { Project } from "../demo-modal/project.jsx";
import styles from './demo-box.module.less';

const DemoBox = ({ config, demoBoxClick, bgColor, size }) => {
  const project = config;

  const ImageDiv = styled.div`
    background-image: url(${project.imgSrc});
  `;

  const InfoDiv = styled.div`
    background-color: ${bgColor[0]};
    box-shadow: inset 0 0 5em 1em ${bgColor[1]};
  `;

  const url = project.url ? (
    <div className={styles['url']}>
      <a target="_blank" href={project.url} onClick={(e) => {
        e.stopPropagation();
      }} rel="noreferrer">{project.urlText ? project.urlText : project.url}</a>
    </div>
  ) : null;

  const isLarge = !size || size === 'large';

  const infoDiv = project.title ? (<InfoDiv className={styles['info-div']}>
    <div className={styles['title']}>{project.title}</div>
      {isLarge && <div className={styles['description']}>
      <div>{project.verbose}</div>
      {url}
    </div>}
  </InfoDiv>) : null;

  const className = cx({
    [styles['demo-box-small']]: size === 'small',
    [styles['demo-box-large']]: isLarge,
    [styles['no-info']]: !infoDiv
  });

  const StyledDemoBox = (
    <div className={className} onClick={(evt) => doClick(evt, project, bgColor)}>
      <ImageDiv className={styles['demo-img']} />
      {/*{infoDiv}*/}
    </div>
  );

  const doClick = (evt, project, bgColor) => {
    evt.preventDefault();
    demoBoxClick(<Project project={project} />, project.title, bgColor);
  }

  return StyledDemoBox;
}

export default DemoBox;
