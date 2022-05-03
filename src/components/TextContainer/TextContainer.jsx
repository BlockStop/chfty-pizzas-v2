import React from 'react';
import styles from './TextContainer.module.scss';

const TextContainer = (props) => {
    return (
    <div className={styles.text}>
        <p>{props.children}</p>
    </div>
    );
}

export default TextContainer;