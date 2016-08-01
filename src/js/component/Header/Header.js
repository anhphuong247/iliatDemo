import React from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from"../HeaderDesktop/HeaderDesktop";
import styles from"./Header.css";
export default class Header extends React.Component{
    render(){
        return(
        <header className={styles.header}>
            <HeaderMobile/>
            <HeaderDesktop/>
        </header>
        )
    }
}