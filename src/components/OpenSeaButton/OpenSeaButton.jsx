import React from 'react';
import styles from './OpenSeaButton.module.scss';

const OpenSeaButton = (props) => {
    return (
        <div className={styles.osButton}>
            <button>{props.children}</button>
        </div>
    );
}

export default OpenSeaButton;