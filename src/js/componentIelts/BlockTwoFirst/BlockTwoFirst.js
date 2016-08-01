import React from "react";
import styles from "./BlockTwoFirst.css";
export default class BlockTwoFirst extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonIelts/page-block-second.json',
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
                <div key={comment.id} className={styles['teacher-item']}>
                    <div >
                        <img src={comment.url}/> 
                        <div className={styles['teacher-information']}>
                            <h4 className={styles['teacher-name']} dangerouslySetInnerHTML={this.rawMarkup(comment.FirstLine)}></h4>
                            <div className={styles['teacher-detail']}>
                                <p dangerouslySetInnerHTML={this.rawMarkup(comment.SecondLine)}></p>
                            </div>
                        </div> 
                    </div>
                </div>
            )
        })
        
        return(
            <div>{Comments}</div>
        ) 
    }
}