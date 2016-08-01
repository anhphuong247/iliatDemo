import React from "react";
import BlockContentOne from"../BlockContentOne/BlockContentOne";

import styles from "./BlockContent.css";
export default class BlockContent extends React.Component{
    render(){
      
        return(
           
           <div className={styles['block-content']}>
              <div class="fade_scale">  
                  <h1>HỌC GMAT - TẠI SAO CHỌN ILIAT?</h1>
                  <p>
                      LIAT - Sự lựa chọn đầu tiên và tốt nhất đưa bạn đến những trường đại học kinh doanh hàng đầu thế giới!
                  </p>
                  <BlockContentOne/>
              
              </div>  
            </div>
        
        );
    }
}