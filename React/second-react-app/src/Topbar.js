import React from "react";

import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>
        <nav className={classes.Topbar}>
            <img
            src="https://i0.wp.com/mossegalapoma.cat/imatges/amazon_logo_black_510x120.png?resize=480%2C113&ssl=1"
            alt="amazon logo"
            />
        </nav>
        </header>
    )
  
};

export default Topbar;
