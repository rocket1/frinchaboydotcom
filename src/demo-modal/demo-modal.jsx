import React, { Component } from 'react';
import styles from './demo-modal.module.less';
import cx from "classnames";
// import Close from 'react-material-icons/icons/navigation/close';
import Masonry from 'react-masonry-component';
import FadeImage from '../fade-image/fade-image';

class DemoModal extends Component {

  /**
   *
   * @param e
   */
  static preventTouchMove(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   *
   * @param e
   */
  closeModal(e) {
    e.preventDefault();
    this.props.closeFunc();
  }

  /**
   *
   * @private
   */
  _lockScroll() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
  }

  /**
   *
   * @private
   */
  _unlockScroll() {
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
    document.body.style.overflow = 'auto';
  }

  /**
   *
   * @returns {XML}
   */
  render() {

    const project = this.props.project;
    const bgColor = this.props.bgColor;

    if (project) {

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

      this._lockScroll();

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

      const className = cx(styles['demo-modal'], {
        [styles.show]: !!project
      });

      // const ModalDiv = styled.div`
      //     background-color: ${bgColor[0]};
      //     box-shadow: inset 0 0 5em 1em ${bgColor[1]};
      // `;

      return (

        <div className={className} style={{ backgroundColor: bgColor }}>
          <div className="modal-wrapper">
            <div className="toolbar-wrapper">
              <div className="toolbar">
                <h2>{title}</h2>
                <a onClick={(e) => this.closeModal(e)} href="">
                  {/*<Close />*/}
                  X
                </a>
              </div>
            </div>
            <div className="body">
              {content}
            </div>
          </div>
        </div>

      );
    } else {
      this._unlockScroll();
      return null;
    }
  }
}

export default DemoModal;
