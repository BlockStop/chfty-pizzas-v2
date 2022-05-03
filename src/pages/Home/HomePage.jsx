import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import styles from "./HomePage.module.scss";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


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
    <div className={styles.page} style={{ backgroundImage: 'url(https://vsprblockchain.s3.amazonaws.com/background.png)'}}>
        <section className={styles.page__filter}>
            <Navbar />
            <div className={styles.page__text}>
                <Fade>
                    <h1>CHFTY</h1>
                </Fade>
            </div>
            <Bounce right>
                <SoldOutComponent />
            </Bounce>
        </section>
    </div> 
    );
}

export default HomePage;