import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import Fade from 'react-reveal/Fade';
import WalletConnect from '../../components/WalletConnect/WalletConnect';
import styles from './SecretMenu.module.scss';


function SecretMenu() {
  return (
    <div className={styles.page}>
        <Navbar isLight isReverse/>
        <Fade>
            <PageTitle text='Secret Menu'/>
        </Fade>
        <WalletConnect />
    </div>
  )
}

export default SecretMenu;
