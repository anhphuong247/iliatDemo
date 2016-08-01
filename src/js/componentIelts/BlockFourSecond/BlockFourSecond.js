import React from "react";
import styles from "./BlockFourSecond.css";
export default class BlockFourSecond extends React.Component{
    render(){
      
        return(
           
       <div className={styles['course-item']}>
            <div className={styles['course-content-block']}>
              <h2>IELTS MASTER</h2>
              <h3>(5.0 - 6.5+)</h3>
          <h3 className={styles.price}>5.300.000 VNĐ</h3>
            <div className={styles['content-more']}>
                 <p>Dành cho học viên chưa có kiến 
                    thức sâu về IELTS. 
                    Hoàn thiện kiến thức và nắm chắc 
                    phương pháp làm bài IELTS.</p>
              </div>
                <h5>Writing</h5>
                  <p>Luyện lên bố cục, phát triển ý cho cả 2 task Writing, trang bị collocations, idioms.
                  </p>
                <h5>Listening</h5>
                  <p>Luyên nghe nâng cao bản tin hội thoại ngắn</p>
                <h5>Speaking</h5>
                  <p>Hoàn thiện phát âm , ngữ điệu và luyện 3 part Speaking với topic nâng cao
                  </p>
                <h5>Reading</h5>
                  <p>Luyện đọc tất cả các dạng Reading cấp độ trung bình</p>
            </div>
          <button className={styles['btn-course-item']}>GHI DANH VÀO HỌC</button>
            </div>
        );
    }
}