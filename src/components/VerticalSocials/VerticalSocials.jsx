import React from 'react';
import TwitterImg from '../../assets/twitter-48.png';
import DiscordImg from '../../assets/discord-48.png';
import InstagramImg from '../../assets/insta.png';
import OsImg from '../../assets/opensea-black.png';
import EtherscanImg from '../../assets/etherscan-logo-circle.png';
import styles from './VerticalSocials.module.scss';

function VerticalSocials() {
  return (
    <div className={styles.vertical}>
        <a href = "https://twitter.com/CHFTYPizzas">
          <img src={TwitterImg}/>
        </a>
        <a href = "https://discord.gg/EZJFp8DkUK">
          <img src={DiscordImg}/>
        </a>
        <a href = "https://www.instagram.com/chfty_nft/">
          <img src={InstagramImg}/>
        </a>
        <a href = "https://opensea.io/collection/chfty-chftypizzas">
          <img src={OsImg}/>
        </a>
        <a href = "https://etherscan.io/address/0xA720E16603f81CD82FaAE15AE16F1aCfE88ddF0F">
          <img src={EtherscanImg}/>
        </a>
    </div>
  )
}

export default VerticalSocials;
