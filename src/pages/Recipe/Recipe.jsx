import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import Popup from '../../components/Popup/Popup';
import RoadmapItem from '../../components/RoadmapItem/RoadmapItem';
import locales from '../../text';
import ChefImg from '../../assets/cooking-temp.png'
import Fade from 'react-reveal/Fade';
import styles from './Recipe.module.scss';

const Recipe = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={styles.page}>
            <Navbar isLight isReverse/>
            <Fade>
                <PageTitle text='Recipe'/>
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

            <Fade>
                <PageTitle text='Recipe'/>
            </Fade>
            
            <button onClick={() => setButtonPopup(true)}>
            <RoadmapItem roadmapDescription= 'this is a test roadmap description' roadmapStatus='in progress'/>
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> my popup </Popup>
        </div>
    );
}

export default Recipe;