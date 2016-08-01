import React from "react";
import styles from"./HeaderMobile.css";

export default class HeaderMobile extends React.Component{
    
    constructor(){
        super()
        this.state = { show: false }
    }
    
    handleClick(){
        this.setState({
            show : !this.state.show
        })
        
    }
    
    render(){
        let activeClass = !this.state.show ? "" : styles.active
        console.log(this.state.show)
        return(
            <div className={styles['mobile-nav']} >
                <div className={styles.logo}>
                    <a href=""><img src="img/logo.png"/></a>
                </div>
                <div className={styles.popup + ' ' + activeClass} id="popup">      
                    <div className={styles['menu-button']} onClick={this.handleClick.bind(this)} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles['dropdown-menu']} id="dropdown-menu">
                    <ul>
                    <li class={styles['dropdown-item']}>LỊCH HỌC IELTS 2016</li>
                    <li class={styles['dropdown-item']}>ĐĂNG KÝ HỌC</li>
                    </ul>
                </div>
                </div>      
            </div>

        );
    }
}