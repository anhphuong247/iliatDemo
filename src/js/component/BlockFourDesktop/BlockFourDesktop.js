import React from "react";
import styles from "./BlockFourDesktop.css";
export default class BlockFourDesktop extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: './json/jsonGmat/page-block-four.json',
            // dataType: 'json',
            cache: false,
            success: function(res){
            console.log(res);
                this.setState({data : res});
            }.bind(this),
            error: function(res){
                console.log(res);
            }.bind(this)
        });
    }
    rawMarkup(markdown) {
        var md = new Remarkable();
        var rawMarkup = md.render(markdown);
        return { __html: rawMarkup };
    }
    render(){
        console.log("data:" + this.state.data);
        var Comments = this.state.data.map((comment)=>{

        return(
             <div className={styles['Three-desktop']} key={comment.id}>
                <h1>HỌC PHÍ VÀ ƯU ĐÃI</h1>
                
                <div className={styles['price-content']}>
                    <p dangerouslySetInnerHTML={this.rawMarkup(comment.text)}></p>
                </div>
                
                <div className={styles['price-desktop']}>
                    <div className={styles.price}>
                        <h3 dangerouslySetInnerHTML={this.rawMarkup(comment.Price)}></h3>
                    </div>
                    <h4>Bạn cần hỗ trợ và tư vấn?</h4>
                        <button  className={styles['button-register']}>        
                            <h4 dangerouslySetInnerHTML={this.rawMarkup(comment.button)}></h4>
                        </button>
                </div>
            </div>
           
             )
         })
        return(
            <div>{Comments}</div>
        ) 
    }
}