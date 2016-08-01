import React from "react";
import { IndexLink, Link, withRouter } from "react-router";

import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
import styles from "./Header.css";
export default class Header extends React.Component{
    render(){
        return(
            <header className={styles.header}>
                <HeaderDesktop/>
                <HeaderMobile/>
            </header>
        
        );
    }
}