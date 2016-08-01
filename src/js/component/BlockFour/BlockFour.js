import React from "react";
import BlockFourDesktop from "../BlockFourDesktop/BlockFourDesktop";
import BlockFourMobile from "../BlockFourMobile/BlockFourMobile";
import styles from "./BlockFour.css";
export default class BlockFour extends React.Component{
    render(){
      
        return(
              <div className={styles['block-content']}>
                <div class="fade_up">
                  <BlockFourDesktop/>
                  <BlockFourMobile/>
                </div>    
              </div>
           
        );
    }
}