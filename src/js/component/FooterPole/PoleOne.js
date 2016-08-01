import React from "react";
import styles from "./PoleOne.css";
export default class PoleOne extends React.Component{
    render(){
        return(
            <div>
                <div className={styles.logofooter}>
                    <img src="../img/logo.png"/>
                </div>
                <div className={styles.address}>
                    <p>Số 28, ngách 10, ngõ 121, Chùa Láng</p>
                    <p>Số 101D, ngõ 95, chùa Bộc, Đống Đa</p>
                    <p> Ms. Quỳnh: 0165 339 9457</p>
                    <p>Ms. Hà: 0165 300 5670</p>
                    <p> contact@iliat.org </p>
                </div>
            </div>
        
        );
    }
}