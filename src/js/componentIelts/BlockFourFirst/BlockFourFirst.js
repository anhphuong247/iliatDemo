import React from "react";
import styles from "./BlockFourFirst.css";
export default class BlockFourFirst extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonIelts/page-block-four.json',
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
    componentDidUpdate(){
             $("#slider").slick({
              dots: false,
              infinite: false,
              arrows:false,  
              //        centerMode: true,
              slidesToShow: 3,
              //        slidesToScroll: 1
              responsive: [{
                breakpoint: 1080,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows:false,
                } 
              }]
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
               <div className={styles['course-item']} key={comment.id}>
                <div className={styles['course-content-block']}>
                  <h2 dangerouslySetInnerHTML={this.rawMarkup(comment.Name)}></h2>
                  <h3 className={styles.price} dangerouslySetInnerHTML={this.rawMarkup(comment.Price)}></h3>
                  <div className={styles['content-more']}>
                    <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
                  </div>
                    <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill1)}></h5>
                      <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide1)}></p>
                    <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill2)}></h5>
                      <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide2)}></p>
                    <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill3)}></h5>
                      <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide3)}></p>
                    <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill4)}></h5>
                      <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide4)}></p>
                </div>
                <button className={styles['btn-course-item']}>GHI DANH VÀO HỌC</button>
                </div>
              )
            })
        return(
              <div>
                <div id="slider">{Comments}</div>
              </div>
        ) 
    }
}