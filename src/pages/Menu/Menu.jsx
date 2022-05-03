import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import locales from '../../text';
import ChefImg from '../../assets/cooking-temp.png'
import Fade from 'react-reveal/Fade';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='Menu'/>
            </Fade>
            <div className={styles.split}>
            <Fade top>
                <TextContainer> 
                    {locales.en.menuPage.description1} <br /> <br />
                    {locales.en.menuPage.description2}
                </TextContainer>
            </Fade>
                <div className={styles.img__container}>
                <Fade>
                    <img src={ChefImg} loading="lazy"/>
                </Fade>
                </div>
            </div>
        </div>
    );
}

export default Menu;