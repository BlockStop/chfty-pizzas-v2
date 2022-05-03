import React from 'react';
import Ellipse from '../../assets/Ellipse.png';
import styles from './PageTitle.module.scss';

const PageTitle = (props) => {
    return(
        <div className={styles.title}>
            <div className={styles.line}/>
            <div className={styles.title__container}>
                <img src={Ellipse} />
                <h1 className={styles.header}> {props.text} </h1>
            </div>
        </div>
    );
}

export default PageTitle;