import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, StyledSocials, StyledSocialsCol } from './Menu.styled';
import { SidebarTheme } from '../../styles/theme/theme';
import { Link } from 'react-router-dom';
import TwitterImg from '../../assets/twitter-48.png';
import DiscordImg from '../../assets/discord-48.png';
import OsImg from '../../assets/opensea-black.png';
import EtherscanImg from '../../assets/etherscan-logo-circle.png';

const Menu = ({ open, ...props }) => {  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} theme={SidebarTheme}>
      <Link to="/" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="home"></span> Home </Link>
      <Link to="/about" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="about"></span> About </Link>
      <Link to="/menu" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="recipe"></span> Menu </Link>
      <Link to="/secretrecipes" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="secretmenu"></span> Secret Recipes </Link>
      <Link to="/team" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="team"></span> The Team </Link>
      <Link to="/philanthropy" onClick={() => props.setOpen(!open)}> <span role="img" aria-label="philanthropy"></span> Philanthropy </Link>

      <StyledSocialsCol>
      <StyledSocials>
        <a href = "https://twitter.com/CHFTYPizzas">
          <img src={TwitterImg}/>
        </a>
        <a href = "https://discord.gg/EZJFp8DkUK">
          <img src={DiscordImg}/>
        </a>
        <a href = "https://opensea.io/collection/chfty-chftypizzas">
          <img src={OsImg}/>
        </a>
        <a href = "https://etherscan.io/address/0xA720E16603f81CD82FaAE15AE16F1aCfE88ddF0F">
          <img src={EtherscanImg}/>
        </a>
      </StyledSocials>
      </StyledSocialsCol>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;