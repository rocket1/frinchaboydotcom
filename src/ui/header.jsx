import React, {Component} from 'react';
import styles from './header.module.less';
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
            <div className={styles['header']}>
                <div className={styles['hero']}>
                    <div className={styles['hero-text']}>
                        <h1>Jason Frinchaboy</h1>
                        <h2>jazzmongrel@gmail.com</h2>
                    </div>
                    <Links/>
                </div>
            </div>
        )
    }
}

export default Header;


