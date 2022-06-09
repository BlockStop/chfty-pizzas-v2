import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import FullRoadmapItem from '../../components/FullRoadmapItem/FullRoadmapItem';
import { RoadmapContent } from '../../text/RoadmapContent';
import Popup from '../../components/Popup/Popup';
import PizzaOne from '../../assets/Pizzas_1.png'
import PizzaTwo from '../../assets/Pizzas2.png'
import PizzaThree from '../../assets/Pizzas3.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import styles from './Menu.module.scss';

const Menu = () => {
      const [buttonPopup, setButtonPopup] = useState(false);
      const [popupTitle, setPopupTitle] = useState('');
      const [popupDescription1, setPopupDescription1] = useState('');
      const [popupDescription2, setPopupDescription2] = useState('');
      const [popupImg, setPopupImg] = useState('');
      const [roadmapStatus, setRoadmapStatus] = useState('');
      const [statusColor, setStatusColor] = useState('');
      const [number, setNumber] = useState('0');
      
      useEffect(() => {
        setPopupTitle(RoadmapContent.content[number]['title'])
        setPopupDescription1(RoadmapContent.content[number]['extendedDescription1'])
        setPopupDescription2(RoadmapContent.content[number]['extendedDescription2'])
        setPopupImg(RoadmapContent.content[number]['imgUrl'])
        setRoadmapStatus(RoadmapContent.content[number]['status'])
        setStatusColor(RoadmapContent.content[number]['color'])
      }, [number])


    return (
        <React.Fragment>
        <div className={`${styles.page} ${buttonPopup && styles.duringPopUp}`}>
            <Navbar isLight isReverse/>

            <Fade>
                <PageTitle text='The Menu'/>
            </Fade>
            
            <div className={styles.row}>
                <Zoom>
                <div className={styles.column}>
                    <h2>Starters</h2>
                    <img src={PizzaOne}/>
                    <FullRoadmapItem num='0' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='1' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='2' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='3' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>

                <Zoom>
                <div className={styles.column}>
                    <h2>Main Course</h2>
                    <img src={PizzaTwo}/>
                    <FullRoadmapItem num='4' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='5' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='6' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='7' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>

                <Zoom>
                <div className={styles.column}>
                    <h2>Dessert</h2>
                    <img src={PizzaThree}/>
                    <FullRoadmapItem num='8' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='9' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                    <FullRoadmapItem num='10' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber}/>
                </div>
                </Zoom>
           
            </div>
        </div>
        <div className={styles.popup}>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} title={popupTitle} description1={popupDescription1} description2={popupDescription2} popupImg={popupImg} status={roadmapStatus} color={statusColor}/>
        </div>
        </React.Fragment>
    );
}

export default Menu;