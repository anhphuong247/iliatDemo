import React from "react";
import styles from "./BlockFourThree.css";
export default class BlockFourThree extends React.Component{
    render(){
      
        return(
            <div className={styles['course-item']}>
                 <div className={styles['course-content-block']}>
                  <h2>IELTS MASTER+</h2>
                  <h3>(6.0 - 7.0+)</h3>
                  <h3 className={styles.price}>5.700.000 VNĐ</h3>
                  <div className={styles['content-more']}>
                    <p>
                          Dành cho học viên có trình độ cao
                        và mong muốn cải thiện đặc biệt 
                        là các kĩ năng chủ động (Writing 
                        và Speaking) trước khi thi IELTS.
                    </p>
                  </div>
                   <h5>Writing + Speaking</h5>
                      <p>
                          Chuyên sâu 2 kỹ năng Writing & Speaking hướng đến band 7.0+: Luyện kỹ năng nâng cao, hoàn thiện bố cục, làm chủ vốn từ vựng học thuật 10 chủ điểm khó, sử dụng hiệu quả collocations, idioms.
                      </p>
                    <h5>Listening + Reading</h5>
                      <p>
                          Đọc và nghe ở cấp độ khó bằng và hơn thi thật để nâng band điểm nhiều nhất.
                        </p>
                    <h5>IELTS Mock Test</h5>
                      <p>Làm đề thi thật dưới áp lực thời gian. Chuẩn bị tốt chiến thuật cho bài thi hiệu quả.
                      </p>
                </div>
              <button className={styles['btn-course-item']}>GHI DANH VÀO HỌC</button>
            </div>
         );
    }
}