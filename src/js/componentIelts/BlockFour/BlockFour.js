import React from "react";
import BlockFourFirst from "../BlockFourFirst/BlockFourFirst";
import BlockFile from "../BlockFile/BlockFile";
import styles from "./BlockFour.css";
export default class BlockFour extends React.Component{
    render(){
      
        return(
            <div class="fade_scale">
                <div className={styles['block-content']}>
                    <h1>LỚP HỌC NÀO PHÙ HỢP NHẤT VỚI BẠN?</h1>
                        <div className={styles.slider} > 
                            <BlockFourFirst/>
                        </div>
                    <BlockFile/>
                </div>
            </div>
        );
    }
}