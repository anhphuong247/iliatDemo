import React from "react";
import styles from "./PoleFour.css";

export default class PoleFour extends React.Component{
    render(){
        return(
            <div className={styles.contact}>
                <div className={styles['contact-block']}>
                    <h4>Tìm ILIAT tại</h4>
                <div className={styles['social-list']}>
                    <a href=""><img src="img/facebook-icon.png"/></a>
                    <a href=""><img src="img/youtube-icon.png"/></a>
                    <a href=""><img src="img/blog_icon.png"/></a>
                </div>
                </div>
            </div>
        );
    }
}