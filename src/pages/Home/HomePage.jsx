import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import PizzaOne from '../../assets/PizzaLogo.png';
import PizzaTwo from '../../assets/PizzaTwoTop.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import styles from "./HomePage.module.scss";


const HomePage = (props) => {
    return(
    <div className={styles.page} style={{ backgroundImage: 'url(https://vsprblockchain.s3.amazonaws.com/background.png)'}}>
        <section className={styles.page__filter}>
            <Navbar />
            <div className={styles.page__text}>
                <Fade>
                    <h1>SOLD OUT</h1>
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
        </section>
    </div> 
    );
}

export default HomePage;