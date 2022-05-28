import React, { Component } from 'react';
import CSSModules from 'css-modules';
import { BrowserRouter, Route } from 'react-router-dom';
import DemoGrid from '../demo-grid/demo-grid';
import DemoModal from '../demo-modal/demo-modal';
import Header from '../ui/header';
import Footer from '../ui/footer';
import styles from './app.less';
import cx from 'classnames';
// import keydown from 'react-keydown';
import WebFont from 'webfontloader';

class App extends Component {

  /**
   *
   * @param props
   */
  constructor(props) {

    super(props);

    this.state = {
      project: null,
      modalBgColor: null,
      contentReady: false,
      fontReady: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   *
   */
  componentDidMount() {

    const img = new Image();

    img.onload = () => {
      this.setState({
        contentReady: true
      })
    };

    img.src = "/img/hero-bg.jpg";

    WebFont.load({
      google: {
        families: ['Noto Sans', 'Merriweather']
      },
      active: () => {
        this.setState({
          fontReady: true
        })
      }
    });
  };

  /**
   *
   * @param e
   */
  // @keydown('esc')
  submit(e) {
    e.preventDefault();
    this.closeModal();
  }

  /**
   *
   * @param project
   * @param bgColor
   */
  openModal(project, bgColor) {
    this.setState({ modalBgColor: bgColor, project: project });
  }

  /**
   *
   */
  closeModal() {
    this.setState({ project: null });
  }

  /**
   *
   * @returns {XML}
   */
  render() {

    const ready = this.state.contentReady && this.state.fontReady;

    const bodyClassName = cx(styles['app-body'], {
      [styles.show]: ready
    });

    return (
      <BrowserRouter>
        <Route exact path="/">
          <React.Fragment>
            <Footer ready={ready} />
            <DemoModal project={this.state.project} closeFunc={this.closeModal}
                       bgColor={this.state.modalBgColor} />
            <div className={bodyClassName}>
              <Header />
              <div styleName="content">
                <div styleName="content-inner">
                  <DemoGrid ready={ready} demoBoxClick={this.openModal} />
                </div>
              </div>
            </div>
          </React.Fragment>
        </Route>
      </BrowserRouter>
    )
  }
}

export default CSSModules(App, styles);


