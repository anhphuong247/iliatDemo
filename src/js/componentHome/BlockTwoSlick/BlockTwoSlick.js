import React from "react";
import styles from "./BlockTwoSlick.css";
export default class BlockTwoSlick extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonHome/blockStutentThink.json',
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
              dots: true,
              infinite: true,
              slidesToShow: 1,
              arrows:false, 
        //    slidesToScroll: 1
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
                 
                        <div className={styles['student-thinking-content']} key={comment.id}>
                            <div className={styles['name-student']} >
                                <img src={comment.url}/> 
                                <h2  dangerouslySetInnerHTML={this.rawMarkup(comment.Name)}></h2>
                                <h3  dangerouslySetInnerHTML={this.rawMarkup(comment.Point)}></h3>
                            </div>
                            <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
                        </div> 
             )
        })
        return(
                <div className={styles.slick}>
                        <div id="slider"> 
                            {Comments}
                        </div>      
                </div>
        ) 
    }
}