import React from "react";
import styles from "./BlockThreeFrist.css";

export default class BlockThreeFirst extends React.Component{
    render(){
      
        return(
           <div class="fade_left">
              <div className={styles['third_line']}>
                    <h4>32 BUỔI</h4>
                    <div className={styles.past}>
                        <div className={styles.headboard}></div>
                        <div className={styles.headboard}></div>
                    </div>
                    <div className={styles.time}>
                        <p>11 tuần </p>
                        <p>3 buổi/tuần</p>
                    </div>
                    <div className={styles.separator}></div>
                    <button className={styles.schedule}>Lịch học GMAT 2016</button>
            </div>
            <p className={styles['title_where']}>Học GMAT tại ILIAT</p>

            <div className={styles.instruction}>
                <div className={styles.bullet}>
                    <img src="img/1.png"/>
                    <div className={styles['note_one']}>
                        <p>Thi thử Phỏng vấn đầu vào</p>
                    </div>
                </div>
                <div className={styles.bullet}>
                    <img src="img/2.png"/>                                                   
                    <div className={styles['note_one']}>
                        <p>Học và rèn luyện nghiêm túc, hiệu quả</p>
                    </div>
                </div>
                <div className={styles.bullet}>
                    <img src="img/3.png"/>
                    <div className={styles['note_one']}>
                        <p>
                              Thử thách với các mini test, luyện thi trên máy tính
                        </p>
                    </div>
                </div>
            </div>

            
        </div>
        );
    }
}