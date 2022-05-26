import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import locales from '../../text';
import Fade from 'react-reveal/Fade';
import TomImg from '../../assets/tom.webp';
import SpikeImg from '../../assets/spike.webp';
import BlockstopImg from '../../assets/blockstop.webp';
import DoorImg from '../../assets/door.webp';
import styles from './Team.module.scss';

function Team() {
  return (
    <div className={styles.page}>
    <Navbar isLight isReverse/>
    <Fade>
        <PageTitle text='The Team'/>
    </Fade>

    <div className={styles.col}>
    <div className={styles.row}>
    <div className={styles.container}>
        <img className={styles.image} alt='tom' src={TomImg} />
            <div className={styles.overlay}> 
                <div className={styles.text}> {locales.en.teamPage.tomDescription} </div>
            </div>
            <h2>Tom Colicchio</h2>                
    </div>

    <div className={styles.container}>
        <img className={styles.image} alt='spike' src={SpikeImg} />
            <div className={styles.overlay}> 
                <div className={styles.text}>{locales.en.teamPage.spikeDescription} </div>
            </div>
            <h2>Spike Mendelsohn</h2>                
    </div>
    </div>

    <div className={styles.row}>
    <div className={styles.container}>
        <img className={styles.image} alt='BlockStop' src={BlockstopImg} />
            <div className={styles.overlay}> 
                <div className={styles.text}> {locales.en.teamPage.blockstopDescription} </div>
            </div>
            <h2>BlockStop</h2>                
    </div>

    <div className={styles.container}>
        <img className={styles.image} alt='Door' src={DoorImg} />
            <div className={styles.overlay}> 
                <div className={styles.text}> {locales.en.teamPage.doorDescription} </div>
            </div>
            <h2>The Door</h2>                
    </div>
    </div>
    </div>
</div>
  )
}

export default Team;
