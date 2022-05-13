import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import FullRoadmapItem from '../../components/FullRoadmapItem/FullRoadmapItem';
import Popup from '../../components/Popup/Popup';
import { RoadmapContent } from '../../text/RoadmapContent';
import { AiOutlineArrowDown } from 'react-icons/ai';
import locales from '../../text';
import ChefImg from '../../assets/PizzaTwoTop.png'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import styles from './Recipe.module.scss';

const Recipe = () => {
    useEffect(() => {
        console.log(`roadmap content: ${RoadmapContent.content[0]['description']}`);
      }, [])

    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='The Recipe'/>
            </Fade>

            <div className={styles.split}>
                <Fade top>
                    <TextContainer> 
                        {locales.en.menuPage.description1} <br /> <br />
                        {locales.en.menuPage.description2} <br /> <br />
                        <AiOutlineArrowDown style={{fontSize: '32px'}} />
                    </TextContainer>
                </Fade>
                <div className={styles.img__container}>
                <Fade>
                    <img src={ChefImg} loading="lazy"/>
                </Fade>
                </div>
            </div>

            <Fade>
                <PageTitle text='Step-by-Step'/>
            </Fade>
            
            <div className={styles.row}>
                <Bounce bottom>
                <div className={styles.column}>
                    <FullRoadmapItem num='0'/>
                    <FullRoadmapItem num='1'/>
                    <FullRoadmapItem num='2'/>
                </div>
                </Bounce>

                <Bounce bottom>
                <div className={styles.column}>
                    <FullRoadmapItem num='3'/>
                    <FullRoadmapItem num='4'/>
                    <FullRoadmapItem num='5'/>
                    <FullRoadmapItem num='6'/>
                    <FullRoadmapItem num='7'/>
                    <FullRoadmapItem num='8'/>
                </div>
                </Bounce>

                <Bounce bottom>
                <div className={styles.column}>
                    <FullRoadmapItem num='9'/>
                    <FullRoadmapItem num='10'/>
                </div>
                </Bounce>
           
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> my popup </Popup>
        </div>
    );
}

export default Recipe;