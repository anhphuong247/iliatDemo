import React from "react";
import styles from "./BlockTwoThree.css";
export default class BlockTwoThree extends React.Component{
    render(){
      
        return(
            <div class="fade_right">
                <div className={styles['teacher-item']+' '+['col-md-4']}>
                    <img src="img/imgIelts1.png"/>
                    <div className={styles['teacher-information']}>
                        <h4 className={styles['teacher-name']}>NGUYỄN MINH SƠN</h4>
                        
                        <div className={styles['teacher-detail']}>
                            <p>- 760 GMAT, 8.0 IELTS, Pass CFA Level </p>
                            <p>- Gần 2 năm kinh nghiệm giảng dạy GMAT</p>
                            <p>- Thạc sĩ Tài chính Đại học Freiburg, Đức</p>
                            <p>- Nhân viên xuất sắc tại Delloite và TechcomBank</p>
                        </div>
                    </div>
                </div>
            </div>    
          
        
        );
    }
}