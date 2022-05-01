import React from 'react';
import PizzaLogo from '../../assets/PizzaLogo.png';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={PizzaLogo} />
        </div>
    );
}

export default Logo;