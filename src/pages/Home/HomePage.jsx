import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import styles from "./HomePage.module.scss";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const HomePage = (props) => {
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