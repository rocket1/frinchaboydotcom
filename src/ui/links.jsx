import React, {Component} from 'react';
import CSSModules from 'css-modules';
import styles from './links.less';

class Links extends Component {

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div styleName="links">
                <a target="_blank" href="/jason-frinchaboy-resume.pdf">R‌ésum‌é</a>
                <a target="_blank" href="https://github.com/rocket1/frinchaboy-demo">Source</a>
                <a target="_blank" href="https://github.com/rocket1">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/jason-frinchaboy-53207a52/">Linkedin</a>
                <a href="mailto:jazzmongrel@gmail.com">Contact</a>
            </div>
        )
    }
}

export default CSSModules(Links, styles);


