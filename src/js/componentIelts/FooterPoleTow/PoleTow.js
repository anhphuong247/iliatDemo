import React from "react";
import styles from "./PoleTow.css";
export default class PoleTow extends React.Component{
    render(){
        return(
                <div className={styles.student}>
                    <h4>Học viên</h4>
                    <a href="">Khoá học GMAT</a>
                    <a href="">Khoá học IELTS</a>
                    <a href="">Khoá học CFA</a>
                </div>
        );
    }
}