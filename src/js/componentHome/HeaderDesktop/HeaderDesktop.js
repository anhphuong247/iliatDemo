import React from "react";
import { IndexLink, Link, withRouter } from "react-router";
import styles from "./HeaderDesktop.css";
export default class HeaderDesktop extends React.Component{
 constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
}

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
  
    let navClass = collapsed ? "collapse" : "";
        return(
            
            <div className={styles['desktop-nav']}>
                <div className={styles.logo}>
                    <img src="img/logo.png"/>
                </div>
                <div className={styles['menu-group']}>
                <div className={styles['menu-course']}>
                    <button><h3>KHOÁ HỌC</h3></button>
                    <div className={styles['menu-course-dropdown']+' '+navClass}>
                        <Link to="layoutgmat" >KHOÁ HỌC GMAT</Link>
                        <Link to="layoutielts">KHOÁ HỌC IELTS</Link>
                    <a href="#">KHOÁ HỌC GRE</a>
                    <a href="#">KHOÁ HỌC CFA</a>
                    </div>
                </div>
                <a href="#" ><h3>LỊCH KHAI GIẢNG 2016</h3></a>
                <a href="#" ><h3>VỀ ILIAT</h3></a>
                </div>
            </div>
        
        
        );
    }
}