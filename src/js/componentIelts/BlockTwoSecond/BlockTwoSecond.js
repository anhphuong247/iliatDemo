import React from "react";
import styles from "./BlockTwoSecond.css";
export default class BlockTwoSecond extends React.Component{
    render(){
      
        return(
            <div class="fade_right">
               <div className={styles['teacher-item']+' '+['col-md-4']}>
                        <img src="img/imgIelts2.png" />
                        <div className={styles['teacher-information']}>
                            <h4 className={styles['teacher-name']}>
                                NGUYỄN THANH TÙNG
                            </h4>
                            <div className={styles['teacher-detail']}>
                                <p>- 740 GMAT - TOEFL 102</p>
                                <p>
                                   - 3+ năm kinh nghiệm giảng dạy GMAT. Giảng viên kỳ cựu tại ILIAT với 8 học viên 700+ với điểm số cao nhất 730
                                </p>
                                <p>- Cử nhân hạng xuất sắc chuyên ngành kinh tế Đại học California, Santa Barbara</p>
                                <p>- Founder, CEO Techkids school và ILIAT school. </p>

                            </div>
                        </div>
                    </div>
            </div>        
              
        
        );
    }
}