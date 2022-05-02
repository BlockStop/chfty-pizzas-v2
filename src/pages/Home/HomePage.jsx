import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import styles from "./HomePage.module.scss";
import BackgroundPhoto from "../../assets/background.png"
import useProgressiveImage from "../../hooks/useProgressiveImage";
import TestPhoto from "../../assets/PizzaLogo.png"
import LazyLoad from 'react-lazy-load';

const HomePage = (props) => {
    // const [isImageLoaded, setIsImageLoaded] = useState(false);

    // useEffect(() => {
    //     console.log(`useEffect: ${isImageLoaded}`);
    //     const image = new Image();
    //     image.onload = () => setIsImageLoaded(true);
    //     image.src = BackgroundPhoto;
    
    //     return () => {
    //       image.onload = null;
    //     };
    // }, []);
    
    // if (!isImageLoaded) {
    //     return null;
    // }

    // console.log(isImageLoaded);
    // props.onLoad(isImageLoaded);


    // const loaded = useProgressiveImage(source)


    return(
    <LazyLoad>
    <div className={styles.page} style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
        <section className={styles.page__filter}>
            <Navbar />
            <div className={styles.page__text}>
                <h1>CHFTY</h1>
            </div>
            <SoldOutComponent />
        </section>
    </div> 
    </LazyLoad>
    );
}

export default HomePage;