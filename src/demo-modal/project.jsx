import cx from "classnames";
import React from "react";
import Masonry from "react-masonry-component";
import FadeImage from "../fade-image/fade-image.jsx";
import styles from "./demo-modal.module.less";

export const Project = ({ project }) => {

  const title = project.title ? project.title : '';
  const tech = project.tech ? project.tech.join(', ') : '';
  const github = project.github ? project.github : '';

  const url = project.url ? (
    <div className="url">
      <a target="_blank" href={project.url} onClick={(e) => {
        e.stopPropagation();
      }}>{project.urlText ? project.urlText : project.url}</a>
    </div>
  ) : null;

  // TODO: Wish this was in the CSS, but didn't work there :(
  const masonryOptions = {
    gutter: 24
  };

  const screenshots = project.screenshots.map((src, index) => {
    return <div key={index} className="screenshot"><FadeImage src={src} /></div>
  });

  let content = (
    <div className="content">
      {url}
      <div className="verbose">{project.verbose ? project.verbose : project.description}</div>
      <div className="tech">{tech} {project.github && <span>(<a target="_blank" href={github}>source</a>)</span>}</div>

      <Masonry options={masonryOptions} className="screenshots">{screenshots}</Masonry>
    </div>
  );

  // const ModalDiv = styled.div`
  //     background-color: ${bgColor[0]};
  //     box-shadow: inset 0 0 5em 1em ${bgColor[1]};
  // `;

  return content;
}