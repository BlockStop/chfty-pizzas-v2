import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import Fade from 'react-reveal/Fade';
import TomImg from '../../assets/tom.jpeg';
import SpikeImg from '../../assets/spike.jpg';
import BlockstopImg from '../../assets/blockstop.jpg';
import DoorImg from '../../assets/door.png';
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
            <div className={styles.text}>Tom Colicchio is the chef and owner of Crafted Hospitality, which currently includes New York’s Craft, Temple Court and Vallata; Long Island's Small Batch Los Angeles’ Craft Los Angeles; and Las Vegas’ Heritage Steak and Craftsteak. An 8-time James Beard Award winner, he is the Head Judge and Executive Producer of Bravo’s Top Chef, host of the Citizen Chef Podcast on iHeartRadio and founding member of the Independent Restaurant Coalition.
            </div>
            </div>
            <h2>Tom Colicchio</h2>                
    </div>

    <div className={styles.container}>
        <img className={styles.image} alt='spike' src={SpikeImg} />
            <div className={styles.overlay}> 
            <div className={styles.text}>Tom Colicchio is the chef and owner of Crafted Hospitality, which currently includes New York’s Craft, Temple Court and Vallata; Long Island's Small Batch Los Angeles’ Craft Los Angeles; and Las Vegas’ Heritage Steak and Craftsteak. An 8-time James Beard Award winner, he is the Head Judge and Executive Producer of Bravo’s Top Chef, host of the Citizen Chef Podcast on iHeartRadio and founding member of the Independent Restaurant Coalition.
            </div>
            </div>
            <h2>Tom Colicchio</h2>                
    </div>
    </div>

    <div className={styles.row}>
    <div className={styles.container}>
        <img className={styles.image} alt='BlockStop' src={BlockstopImg} />
            <div className={styles.overlay}> 
            <div className={styles.text}>Tom Colicchio is the chef and owner of Crafted Hospitality, which currently includes New York’s Craft, Temple Court and Vallata; Long Island's Small Batch Los Angeles’ Craft Los Angeles; and Las Vegas’ Heritage Steak and Craftsteak. An 8-time James Beard Award winner, he is the Head Judge and Executive Producer of Bravo’s Top Chef, host of the Citizen Chef Podcast on iHeartRadio and founding member of the Independent Restaurant Coalition.
            </div>
            </div>
            <h2>Tom Colicchio</h2>                
    </div>

    <div className={styles.container}>
        <img className={styles.image} alt='Door' src={DoorImg} />
            <div className={styles.overlay}> 
            <div className={styles.text}>Tom Colicchio is the chef and owner of Crafted Hospitality, which currently includes New York’s Craft, Temple Court and Vallata; Long Island's Small Batch Los Angeles’ Craft Los Angeles; and Las Vegas’ Heritage Steak and Craftsteak. An 8-time James Beard Award winner, he is the Head Judge and Executive Producer of Bravo’s Top Chef, host of the Citizen Chef Podcast on iHeartRadio and founding member of the Independent Restaurant Coalition.
            </div>
            </div>
            <h2>Tom Colicchio</h2>                
    </div>
    </div>
    </div>
</div>
  )
}

export default Team;
