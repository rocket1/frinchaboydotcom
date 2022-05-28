import React, {PureComponent} from 'react';
import cx from 'classnames';
import styled from 'styled-components'
import styles from './demo-box.less';

class DemoBox extends PureComponent {

  /**
   *
   * @param props
   */
  constructor(props) {

    super(props);

    const project = props.config;

    const ImageDiv = styled.div`
            background-image: url(${project.imgSrc});
        `;

    const InfoDiv = styled.div`
            background-color: ${props.bgColor[0]};
            box-shadow: inset 0 0 5em 1em ${props.bgColor[1]};
        `;

    const url = project.url ? (
      <div className={styles['url']}>
        <a target="_blank" href={project.url} onClick={(e) => {
          e.stopPropagation();
        }}>{project.urlText ? project.urlText : project.url}</a>
      </div>
    ) : null;

    const infoDiv = project.title ? (<InfoDiv className={styles['info-div']}>
      <div className={styles['title']}>{project.title}</div>
      <div className={styles['description']}><div>{project.description}</div>{url}</div>
    </InfoDiv>) : null;

    const className = cx([[styles['demo-box']], {
      [styles['no-info']]: !infoDiv
    }]);

    this.StyledDemoBox = (
      <div className={className} onClick={(evt) => this.doClick(evt, project, props.bgColor)}>
        <ImageDiv className="demo-img" />
        {infoDiv}
      </div>
    );
  }

  /**
   *
   * @param evt
   * @param project
   * @param bgColor
   */
  doClick(evt, project, bgColor) {
    evt.preventDefault();
    this.props.demoBoxClick(project, bgColor);
  }

  /**
   *
   * @returns {XML}
   */
  render() {
    return this.StyledDemoBox;
  }
}

export default DemoBox;
