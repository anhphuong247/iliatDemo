import React from "react";
import styles from "./BlockOne.css";
export default class BlockOne extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: './json/jsonHome/blockOne.json',
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
                   <img  key={comment.id} src={comment.url}/> 
           )
        })
        return(
            <div class="fade_scale">      
                <div className={styles['course-block']}>
                    <h1>CÁC KHOÁ HỌC TẠI ILIAT</h1>
                    <div className={styles.courses}>
                        <div>{Comments}</div>
                    </div>
                </div>
            </div>
        ) 

    }

}