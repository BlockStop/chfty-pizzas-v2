import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle';
import Fade from 'react-reveal/Fade';
import WalletConnect from '../../components/WalletConnect/WalletConnect';
import styles from './SecretRecipes.module.scss';


function SecretRecipes() {
  return (
    <div className={styles.page}>
        <Navbar/>
        <Fade>
            <PageTitle text='Secret Recipes'/>
        </Fade>
        <WalletConnect />
    </div>
  )
}

export default SecretRecipes;
