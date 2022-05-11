import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import locales from '../../text';
import PizzaOne from '../../assets/chefpizza.png'
import PassGif from '../../assets/ethcard.gif'
import Fade from 'react-reveal/Fade';
import styles from './About.module.scss';

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='CHFTY Pizzas'/>
            </Fade>
            <div className={styles.split}>
            <Fade top>
                <TextContainer> 
                    {locales.en.aboutPage.description1} <br /> <br />
                    {locales.en.aboutPage.description2} <br /> <br />
                    {locales.en.aboutPage.description3} <br /> <br />
                    {locales.en.aboutPage.description4} <br /> <br />
                    {locales.en.aboutPage.description5} <br /> <br />
                    {locales.en.aboutPage.description6}
                </TextContainer>
            </Fade>
                <div className={styles.img__container}>
                <Fade>
                    <img src={PizzaOne} loading="lazy"/>
                </Fade>
                </div>
            </div>

            <Fade>
                <PageTitle text='Coming Soon...'/>
            </Fade>
            <div className={styles.split}>
                <div className={styles.img__container__two}>
                    <img src={PassGif} loading="lazy"/>
                </div>

            </div>

        </div>
    );

}

export default AboutPage;