import React, { useState } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.burger}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
      );
}

export default Navbar;