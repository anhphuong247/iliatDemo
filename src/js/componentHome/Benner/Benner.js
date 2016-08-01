import React from "react";
import styles from "./Benner.css";
export default class Benner extends React.Component{
    render(){
        return(
        <div className={styles['banner-block']}>
            <div className={styles['arrow-down']}>
                <a href="#down"><img src="./img/arrow_down.png"/></a>
            </div>
        </div>
        
        
        );
    }

}