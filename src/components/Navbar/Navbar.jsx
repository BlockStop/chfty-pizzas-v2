import React, { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import VerticalSocials from "../VerticalSocials/VerticalSocials";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.scss"
import { useMediaQuery } from "react-responsive";

const Navbar = (props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <div className={`${styles.nav} ${props.isLight && styles.light}`}>
            <div className={styles.logo}>
            <Link to="/" onClick={() => props.setOpen(!open)}>
                <Logo />
            </Link>
            </div>

            {!isMobile && 
                <div className={`${styles.row} ${props.isLight && styles.light}`}>
                    <Link to="/"> <button> Home </button> </Link>
                    <Link to="/about"> <button> About </button> </Link>
                    <Link to="/menu"> <button> Menu </button> </Link>
                    <Link to="/secretrecipes"> <button> Secret Recipes </button> </Link>
                    <Link to="/team"> <button> Team </button> </Link>
                    <Link to="/philanthropy"> <button> Philanthropy </button> </Link>
                </div>
            }
            
            {isMobile && 
                <div className={styles.burger}>
                    <Burger open={open} setOpen={setOpen} isReverse={props.isReverse} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            }
        </div>
      );
}

export default Navbar;