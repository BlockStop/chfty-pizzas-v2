import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import TextContainerTwo from '../../components/TextContainerTwo/TextContainerTwo';
import Navbar from '../../components/Navbar/Navbar';
import locales from '../../text';
import Fade from 'react-reveal/Fade';
import BigGreenImg from '../../assets/bglogo.webp'
import styles from './Philanthropy.module.scss';

const Philanthropy = () => {
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='Philanthropy'/>
            </Fade>
            <div className={styles.split}>
            <Fade top>
                <TextContainerTwo> 
                    {locales.en.philanthropyPage.description1} <br /> <br />
                    {locales.en.philanthropyPage.description2}
                </TextContainerTwo>
            </Fade>
                <div className={styles.img__container}>
                <Fade>
                    <img src={BigGreenImg} loading="lazy"/>
                </Fade>
                </div>
            </div>
        </div>
    );
}

export default Philanthropy;