import React, { Component } from 'react';
import CSSModules from 'css-modules';
import PropTypes from 'prop-types';
import styles from './demo-modal.less';
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
        <div styleName="url">
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
        return <div key={index} styleName="screenshot"><FadeImage src={src} /></div>
      });

      let content = (
        <div className="content">
          {url}
          <div styleName="verbose">{project.verbose ? project.verbose : project.description}</div>
          <div styleName="tech">{tech} {project.github && <span>(<a target="_blank" href={github}>source</a>)</span>}</div>

          <Masonry options={masonryOptions} styleName="screenshots">{screenshots}</Masonry>
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
          <div styleName="modal-wrapper">
            <div styleName="toolbar-wrapper">
              <div styleName="toolbar">
                <h2>{title}</h2>
                <a onClick={(e) => this.closeModal(e)} href="">
                  {/*<Close />*/}
                  X
                </a>
              </div>
            </div>
            <div styleName="body">
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

DemoModal.propTypes = {
  project: PropTypes.object,
  closeFunc: PropTypes.func,
  bgColor: PropTypes.string
};

export default CSSModules(DemoModal, styles);
