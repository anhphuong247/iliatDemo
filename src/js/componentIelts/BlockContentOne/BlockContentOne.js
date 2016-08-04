import React from "react";
import styles from "./BlockContentOne.css";
export default class BlockContentOne extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
      $.ajax({
        url: './json/jsonIelts/page-block-first.json',
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
          <div key ={comment.id} className={styles['item-block']}>
            <img src={comment.url} className={styles.circle}/>
            <div className={styles['item-content']}> 
                <span dangerouslySetInnerHTML={this.rawMarkup(comment.FirstLine)}></span>
                <span dangerouslySetInnerHTML={this.rawMarkup(comment.SecondLine)}></span>
            </div>
          </div>
        )
      })
      return(
        <div>{Comments}</div>
      )

    }
}