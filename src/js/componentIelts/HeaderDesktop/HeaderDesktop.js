import React from "react";
import styles from"./HeaderDesktop.css";
export default class HeaderDesktop extends React.Component{
    render(){
        return(
            <div className={styles['desktop-nav']}  >
                <div className={styles.logo}>
                    <a href=""><img src="img/logo.png"/></a>
                </div>
                <h4>LỊCH HỌC IELTS</h4>
                <button>
                    <h4>ĐĂNG KÝ HỌC</h4>
                </button>
            </div>
        
        
        );
    }
}