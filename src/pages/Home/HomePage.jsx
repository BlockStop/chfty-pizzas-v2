import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import PizzaOne from '../../assets/PizzaLogo50.webp';
import PizzaTwo from '../../assets/PizzaTwo50.webp';
import VerticalSocials from "../../components/VerticalSocials/VerticalSocials";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import styles from "./HomePage.module.scss";
import { useMediaQuery } from "react-responsive";


const HomePage = (props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    return(
    <div className={styles.page} style={{ backgroundImage: 'url(https://vsprblockchain.s3.amazonaws.com/background.png)'}}>
        {!isMobile && <VerticalSocials/>}
        <section className={styles.page__filter}>
            <Navbar />
            <div className={styles.center__row}>
            <div className={styles.page__text}>
                <Fade>
                    <h1>CHFTY PIZZAS</h1>
                </Fade>
                <div className={styles.img__row}>
                    <Fade>
                        <img src={PizzaOne}/>
                        <img src={PizzaTwo}/>
                    </Fade>
                </div>
                <Bounce right>
                    <SoldOutComponent />
                </Bounce>
            </div>
            </div>
        </section>
    </div> 
    );
}

export default HomePage;