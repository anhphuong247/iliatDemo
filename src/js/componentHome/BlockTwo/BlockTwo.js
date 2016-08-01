import React from "react";
import styles from "./BlockTwo.css"
import BlockTwoSlick from "../BlockTwoSlick/BlockTwoSlick";
import BlockTwoRight from "../BlockTwoRight/BlockTwoRight";
export default class BlockTwo extends React.Component{
    render(){
        return(
            <div class="fade_scale">
                <div className={styles['student-thinking']} >
                    <h1>HỌC VIÊN NGHĨ GÌ VỀ ILIAT</h1>
                    <div className={styles.thinking}>
                        <BlockTwoSlick/>
                        <BlockTwoRight/>
                    </div>
                </div>
            </div>    
        );
    }
}