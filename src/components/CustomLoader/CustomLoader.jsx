import React from "react";
import CustomImageLoader from 'custom-image-loader-react';
import LoadingImg from '../../assets/PizzaLogo.png';
import styles from './CustomLoader.module.scss';

const CustomLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loaderRow}>
                <CustomImageLoader
                image={LoadingImg}
                isLoaded={true}
                circle={false}
                speed={2}
                animationType={'flash'}
                />
            </div>
        </div>
    );
}

export default CustomLoader;