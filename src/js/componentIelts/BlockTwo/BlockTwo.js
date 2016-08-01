import React from "react";
import styles from "./BlockTwo.css";
import BlockTwoFirst from "../BlockTwoFirst/BlockTwoFirst";
export default class BlockTwo extends React.Component{
    render(){
      
        return(
            <div class="fade_scale"> 
                <div className={styles['block-content']} >
                	 <h1> ĐỘI NGŨ GIẢNG VIÊN ILIAT</h1>
    	        	  <div className={styles['teacher-block']}>
    							<BlockTwoFirst/>
    	        	  </div>
                </div>      
            </div>
          
        
        );
    }
}