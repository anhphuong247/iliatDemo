import React from "react";
import styles from "./BlockThreeFrist.css";

export default class BlockThreeFirst extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonIelts/page-block-three.json',
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
               <div key={comment.id} >
                    <div className={styles['block-content']}>
                        <h1 dangerouslySetInnerHTML={this.rawMarkup(comment.Title)}></h1>
                        <p className={styles['title_where']} dangerouslySetInnerHTML={this.rawMarkup(comment.TitleLitter)}></p>
                        <div className={styles['third_line']}>
                            <h4 dangerouslySetInnerHTML={this.rawMarkup(comment.Total)}></h4>
                            <div className={styles.past}>
                                <div className={styles.headboard}></div>
                                <div className={styles.headboard}></div>
                            </div>
                            <div className={styles.time}>
                                <p dangerouslySetInnerHTML={this.rawMarkup(comment.Calendar)}></p>
                            </div>
                            <div className={styles.separator}></div>
                            <button className={styles.schedule}>Lịch học Ielts 2016</button>
                        </div>  
                        <p className={styles['title_where']}>Học GMAT tại ILIAT</p>
                        <div className={styles.instruction}>
                            <div className={styles.bullet}>
                                <img src="img/1ielts.png"/>
                                <div className={styles['note_one']}>
                                    <p dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow1)}></p>
                                </div>
                            </div>
                            <div className={styles.bullet}>
                                <img src="img/2ielts.png"/>                                                   
                                <div className={styles['note_one']}>
                                    <p dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow2)}></p>
                                </div>
                            </div>
                            <div className={styles.bullet}>
                                <img src="img/3ielts.png"/>
                                <div className={styles['note_one']}>
                                    <p dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow3)}></p>
                                </div>
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