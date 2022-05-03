import React, { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.scss"

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <div className={`${styles.nav} ${props.isLight && styles.light}`}>
            <div className={styles.logo}>
            <Link to="/" onClick={() => props.setOpen(!open)}>
                <Logo />
            </Link>
            </div>
            <div className={styles.burger}>
                <Burger open={open} setOpen={setOpen} isReverse={props.isReverse} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
      );
}

export default Navbar;