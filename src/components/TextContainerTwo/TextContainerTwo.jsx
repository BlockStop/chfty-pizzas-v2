import React from 'react';
import styles from './TextContainerTwo.module.scss';

const TextContainerTwo = (props) => {
    return (
    <div className={styles.text}>
        <p>{props.children}</p>
    </div>
    );
}

export default TextContainerTwo;