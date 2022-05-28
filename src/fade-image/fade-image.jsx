import React, {Component} from 'react';
import styles from './fade-image.less';
import cx from "classnames";

class FadeImage extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            loaded: false
        };
    }

    /**
     *
     * @param src
     * @private
     */
    _preloadImage(src) {

        const img = new Image();

        img.onload = () => {
            this.setState({
                loaded: true
            })
        };

        img.src = src;
    }

    /**
     *
     * @returns {XML}
     */
    render () {

        const src = this.props.src;

        if (!this.state.loaded) {
           this._preloadImage(src);
        }

        let className = cx(styles['fade-image'], {
            [styles.show]: this.state.loaded
        });

        return (
            <img className={className} src={src} />
        );
    }
}

export default FadeImage;
