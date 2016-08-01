import React from "react";
import styles from "./HeaderMobile.css";
import { IndexLink, Link, withRouter } from "react-router";
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
        let activeClass = !this.state.show ? "" :
        styles.active
        return(
        <div className={styles['mobile-nav']}>
                <div className={styles.logo}>
                    <img src="img/logo.png"/>
                </div>
                <div className={styles.popup + ' ' + activeClass}>  
                    <div className={styles['menu-button']}
                    onClick={this.handleClick.bind(this)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <div className={styles['dropdown-menu']}>
                    <div className={styles['mobile-course']}>
                        <h3>KHOA HOC</h3>
                        <ul> 
                       
                            <li className={styles['dropdown-item']}>
                                <Link to="layoutgmat" >KHOÁ HỌC GMAT</Link>
                            </li>
                     
             
                            <li className={styles['dropdown-item']}>
                                <Link to="layoutielts">KHOÁ HỌC IELTS</Link>
                            </li>
                        
                        <a href="#">
                            <li className={styles['dropdown-item']}>KHOÁ HỌC GRE</li>
                        </a>
                        <a href="#">
                            <li className={styles['dropdown-item']}>KHOÁ HỌC CFA</li>
                        </a>
                        </ul>
                        <h3 className={styles.introduce}>LICH KHAI GIẢNG 2016</h3>
                        <h3 className={styles.event}>VỀ ILIAT</h3>
                    </div>
                </div>
            </div>    
        </div>

        );
    }
}