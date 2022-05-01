import React, {useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import SoldOutComponent from "../../components/SoldOutComponent/SoldOutComponent";
import styles from "./HomePage.module.scss";
import BackgroundPhoto from "../../assets/background.png"

const HomePage = () => {
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => setIsImageLoaded(true);
        image.src = BackgroundPhoto;
    
        return () => {
          image.onload = null;
        };
    }, []);
    
    if (!isImageLoaded) {
        return null;
    }

    console.log(isImageLoaded);

    return(
    <div className={styles.page} style={{backgroundImage: `url(${BackgroundPhoto})`}}>
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