import React from "react";
import BlockThreeFirst from "../BlockThreeFirst/BlockThreeFrist";
import BlockThreeSecond from "../BlockThreeSecond/BlockThreeSecond";
import styles from "./BlockThree.css";
export default class BlockThree extends React.Component{
    render(){
      
        return(
                   <div className={styles['block-content']} >
                        <div class="fade_right">    
                            <h1>HỌC TẠI ILIAT NHƯ THẾ NÀO?</h1>
                            <p className={styles['title_where']}>
                                 Lộ trình tinh gọn. Hiệu quả cao. Chi phí thấp. Học là (đam) "mê"!
                            </p>
                            <BlockThreeFirst/>
                            <BlockThreeSecond/>
                        </div>    
                   </div>

          
        
        );
    }
}