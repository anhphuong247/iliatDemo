import React from "react";
import styles from "./BlockFive.css";
export default class BlockFile extends React.Component{
       constructor() {
            super();
            this.state = {
                data: []
            }
        };
        componentDidMount() {
          console.log("ajaxing");
          $.ajax({
            url: './json/page-block-five.json',
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
            <div key ={comment.id} className={styles['page-block']}>
                <div class="fade_up">    
                    <div className={styles['register-block']} >
                      <h1 dangerouslySetInnerHTML={this.rawMarkup(comment.Title)}></h1>
                      <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
                      <button className={styles['btn-register']}><h4>ĐĂNG KÍ HỌC</h4></button>
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