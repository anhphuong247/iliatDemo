import React from "react";
import styles from "./BannerMobile.css";

export default class BannerMobile extends React.Component{
    render(){
        return(
            <div className={styles['banner-block']}>
                <h1 className={styles['upper-line']}>Go out there</h1>
                <h1 className={styles['down-line']}>the world is waiting!</h1>
                <button>
                <h5>ĐĂNG KÝ NGAY</h5>
                </button>
                <p>Tìm hiểu thêm về khoá học</p>
            <div className={styles['arrow-down']}>
                <a href="#down">
                    <img src="./img/downIelts.png" />
                </a>
            </div>
            </div>
        
        );
    }
}