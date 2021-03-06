import React from 'react'
import Logo from '../Logo/Logo';
import TextContainer from '../TextContainer/TextContainer';
import Fade from 'react-reveal/Fade';
import styles from './Popup.module.scss';

function Popup(props) {
  return (props.trigger)?(
    <div className={styles.popup}>
        <div className={styles.innerpop}> 
            <div className={styles.header}>
                <div className={styles.imgwrap}>
                    <Logo />
                </div>
                <button className={styles.closebtn} onClick={() => props.setTrigger(false)} style={{ fontSize: '32px', color:'#000000' }}> X </button>
            </div>

            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>

            <div className={styles.split}>
                    <TextContainer> 
                        {props.description1} <br /> <br />
                        {props.description2} <br /> <br />
                    </TextContainer>
                    <div className={styles.img__container}>
                        <img src={props.popupImg} loading="lazy"/>
                    </div>
            </div>

            <div className={styles.status}>
                <Fade top>
                    <TextContainer>
                        Status: <p > <span style={{backgroundColor:props.color}}>{props.status}</span> </p>
                    </TextContainer>
                </Fade>
            </div>

            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;
