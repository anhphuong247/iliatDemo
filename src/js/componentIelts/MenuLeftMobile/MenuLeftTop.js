import React from "react";
import styles from  "./MenuLeftTop.css";

export default class MenuLeftTop extends React.Component{
     constructor(){
            super()
            this.state={ show: false}
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
       
        <div className={styles['menu-mobile-left']}>
        <div className={styles['dropdown-menu-mobile']+ ' ' + activeClass}>
        <div className={styles['nav-button']} onClick={this.handleClick.bind(this)}>
            <p>Tìm hiểu khoá IELTS</p>
            <div></div>
            <div></div>
            </div>
            <ul>
                <li>Học ở ILIAT có gì hot?</li>
                <li>Giảng viên</li>
                <li>Giảng viên</li>
                <li>Học phí và ưu đãi</li>
            </ul>
        </div>
        </div>
        
        
        );
    }
}