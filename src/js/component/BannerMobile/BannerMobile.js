import React from "react";
import styles from "./BannerMobile.css";

export default class BannerMobile extends React.Component{
    render(){
        return(
            <div className={styles['banner-block']}>
                <button >
                <h5>ĐĂNG KÝ NGAY</h5>
                </button>
                <p>Tìm hiểu thêm về khoá học</p>
            <div className={styles['arrow-down']}>
                <a href="#down">
                    <img src="./img/arrow_down.png" />
                </a>
            </div>
            </div>
        
        );
    }
}