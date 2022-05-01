import React from 'react';
import OpenSeaButton from '../OpenSeaButton/OpenSeaButton';
import styles from './SoldOutComponent.module.scss';
import { AiOutlineArrowRight } from "react-icons/ai";

const SoldOutComponent = () => {
    return (
        <div className={styles.soldOutContainer}>
            <p> CHFTY Pizzas are <br/> SOLD OUT</p>
            <a href = "https://opensea.io/collection/chfty-chftypizzas">
                <OpenSeaButton> OpenSea &nbsp;<AiOutlineArrowRight /></OpenSeaButton>
            </a>
        </div>
    );

}

export default SoldOutComponent;