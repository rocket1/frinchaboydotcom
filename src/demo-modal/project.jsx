import React from "react";
import FadeImage from "../fade-image/fade-image.jsx";
import styles from "./demo-modal.module.less";

export const Project = ({ project }) => {
  const tech = project.tech ? project.tech.join(', ') : '';
  const github = project.github ? project.github : '';

  const url = project.url ? (
    <div className={styles['url']}>
      <a target="_blank" href={project.url} onClick={(e) => {
        e.stopPropagation();
      }}>{project.urlText ? project.urlText : project.url}</a>
    </div>
  ) : null;

  // TODO: Wish this was in the CSS, but didn't work there :(
  const masonryOptions = {
    gutter: 24
  };

  const screenshots = project.screenshots.map((entry, index) => {
    const entryIsObject = typeof entry === 'object';
    const src = entryIsObject ? entry.src : entry;
    const imgProps = { src };
    if (entry?.maxWidth) {
      imgProps.maxWidth = entry.maxWidth;
    }
    return <div key={index} className={styles['screenshot']}><FadeImage {...imgProps} /></div>
  });

  let content = (
    <div className="content">
      {url}
      <div className={styles['verbose']}>{project.verbose ? project.verbose : project.description}</div>
      <div className={styles['tech']}>Built with: {tech} {project.github && <span>(<a target="_blank" href={github}>source</a>)</span>}</div>
      {screenshots}
    </div>
  );

  return content;
}