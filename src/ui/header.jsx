import React, {Component} from 'react';
import CSSModules from 'css-modules';
import styles from './header.less';
import Links from './links';

class Header extends Component {

    /**
     *
     * @returns {XML}
     */
    render() {

        // filter: blur(5px);
        // -webkit-filter: blur(5px);

        return (
            <div styleName="header">
                <div styleName="hero">
                    <div styleName="hero-text">
                        <h1>Jason Frinchaboy</h1>
                        <h2>Greatest Hits</h2>
                    </div>
                    <Links/>
                </div>
            </div>
        )
    }
}

export default CSSModules(Header, styles);


