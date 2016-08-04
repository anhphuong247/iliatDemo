import React from "react";
import styles from "./BlockFile.css";
export default class BlockFile extends React.Component{
    render(){
        return(
              <div>
                  <p className={styles['course-ads']}>
                      Chương trình đặc biệt hè này! Nhận học bổng ngay sau phỏng vấn? Tại sao không?
                  </p>

                  <div className={styles['course-input-group']}>
                    <button className={styles['btn-button-register']}>Tôi đăng ký nhận học bổng</button>
                    <button className={styles['btn-button-noregister']}>Không, tôi không muốn nhận học bổng...</button>
                  </div>
               </div>
        
        );
    }
}