import React, {Component} from 'react';
import CSSModules from 'css-modules';
import DemoBox from '../demo-box/demo-box';
import demoConfig from '../demo-config.json';
import styles from './demo-grid.less';
import MasonryInfiniteScroller from 'react-masonry-infinite';

class DemoGrid extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {

        super(props);

        this._demoBoxes = demoConfig.projects.map((config, index) => {
            let bgColor = demoConfig.colors[index % demoConfig.colors.length];
            return <DemoBox demoBoxClick={props.demoBoxClick} key={index} config={config} bgColor={bgColor}/>
        });
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        // TODO: extract from CSS using a library.
        const sizes = [
            {columns: 1, gutter: 24},
            {mq: '768px', columns: 2, gutter: 24},
            {mq: '1024px', columns: 3, gutter: 24}
        ];

        return this.props.ready ? (
            <div styleName="demo-grid">
                <MasonryInfiniteScroller sizes={sizes}
                                         loadMore={() => false}>{this._demoBoxes}</MasonryInfiniteScroller>
            </div>
        ) : null;
    }
}

export default CSSModules(DemoGrid, styles);
