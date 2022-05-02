import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './About.module.scss';

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <h2>testing...</h2>
        </div>
    );

}

export default AboutPage;