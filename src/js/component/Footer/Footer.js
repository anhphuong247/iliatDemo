import React from "react";
import PoleOne from "../FooterPole/PoleOne";
import PoleTow from "../FooterPoleTow/PoleTow";
import PoleThree from "../FtThree/PoleThree";
import PoleFour from "../FtFour/PoleFour";
import styles from "./Footer.css"

export default class Footer extends React.Component{
    render(){
        console.log(styles);
        return(
          <footer className={styles['black-bg'] + ' ' + styles['footer-block']}>
                <div className={styles.footer}>
                    <PoleOne/>
                    <PoleTow/>
                    <PoleThree/>
                    <PoleFour/>
                </div>
        </footer>
        
        );
        
    }
}