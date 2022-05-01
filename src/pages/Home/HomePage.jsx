import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return(
    <div className={styles.page}>
        <section className={styles.page__filter}>
            <Navbar />
            <div className={styles.page__text}>
                <h1>CHFTY</h1>
            </div>
            <SoldOutComponent />
        </section>
    </div>
    );
}

export default HomePage;