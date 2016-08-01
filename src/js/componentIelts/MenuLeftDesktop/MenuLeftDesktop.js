import React from "react";
import styles from "./MenuLeftDesktop.css";

export default class MenuLeftDesktop extends React.Component{
    render(){
        return(
        <div className={styles['menu-desktop-left']} id="sidebar">
    
            <ul>
                <li className={styles['dropdown-item-desktop']}>Học ở ILIAT có gì hot?</li>
                <li className={styles['dropdown-item-desktop']}>Giảng viên</li>
                <li  className={styles['dropdown-item-desktop']}>Học ở ILIAT như thế nào?</li>
                <li  className={styles['dropdown-item-desktop']}>Học phí và ưu đãi </li>
            </ul>
            <button className={styles['btn_button']}>ĐĂNG KÝ HỌC</button>
        </div>

        
        );
    }
}