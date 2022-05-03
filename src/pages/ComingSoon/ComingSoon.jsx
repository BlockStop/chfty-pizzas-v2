import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import Fade from 'react-reveal/Fade';
import styles from './ComingSoon.module.scss';

const ComingSoon = () => {
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='Coming Soon'/>
            </Fade>
            <p>Coming soon...</p>
        </div>
    );
}

export default ComingSoon;