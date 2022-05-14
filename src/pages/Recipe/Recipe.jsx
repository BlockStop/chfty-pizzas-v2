import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import TextContainer from '../../components/TextContainer/TextContainer';
import FullRoadmapItem from '../../components/FullRoadmapItem/FullRoadmapItem';
import { RoadmapContent } from '../../text/RoadmapContent';
import Popup from '../../components/Popup/Popup';
import { AiOutlineArrowDown } from 'react-icons/ai';
import locales from '../../text';
import ChefImg from '../../assets/PizzaTwoTop.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import styles from './Recipe.module.scss';

const Recipe = () => {
      const [buttonPopup, setButtonPopup] = useState(false);
      const [popupTitle, setPopupTitle] = useState('');
      const [popupDescription1, setPopupDescription1] = useState('');
      const [popupDescription2, setPopupDescription2] = useState('');
      const [popupImg, setPopupImg] = useState('');
      const [number, setNumber] = useState('0');
      
      useEffect(() => {
        setPopupTitle(RoadmapContent.content[number]['title'])
        setPopupDescription1(RoadmapContent.content[number]['extendedDescription1'])
        setPopupDescription2(RoadmapContent.content[number]['extendedDescription2'])
        setPopupImg(RoadmapContent.content[number]['imgUrl'])
      }, [number])


    return (
        <React.Fragment>
        <div className={`${styles.page} ${buttonPopup && styles.duringPopUp}`}>
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
                <Zoom>
                <div className={styles.column}>
                    <FullRoadmapItem num='0' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='1' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='2' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>

                <Zoom>
                <div className={styles.column}>
                    <FullRoadmapItem num='3' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='4' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='5' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='6' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='7' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='8' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>

                <Zoom>
                <div className={styles.column}>
                    <FullRoadmapItem num='9' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='10' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>
           
            </div>
        </div>
        <div className={styles.popup}>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} title={popupTitle} description1={popupDescription1} description2={popupDescription2} popupImg={popupImg} />
        </div>
        </React.Fragment>
    );
}

export default Recipe;