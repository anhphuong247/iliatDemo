import React from "react";
import styles from "./BlockTwoRight.css";

export default class BlockTwoRight extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonHome/blockStutentRight.json',
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
                
                    <div  key={comment.id}>
                        <h2 className = { styles['word-blue']} dangerouslySetInnerHTML={this.rawMarkup(comment.Number)}>
                        </h2>
                        <h3 dangerouslySetInnerHTML={this.rawMarkup(comment.Graduate)}></h3>
                        <div className = { styles.line }>
                            <img src = "img/SAO.jpg"/>    
                            <h3>
                                <span className = { styles ['word-blue'] } dangerouslySetInnerHTML={this.rawMarkup(comment.Point)}></span> 
                            
                            </h3>
                            <h3 dangerouslySetInnerHTML={this.rawMarkup(comment.Notable)}></h3>
                        </div>    
                        <h2 className = { styles['word-blue'] } dangerouslySetInnerHTML={this.rawMarkup(comment.Percent)}></h2>
                        <h3 dangerouslySetInnerHTML={this.rawMarkup(comment.Satisfied)}></h3>
                    </div>
               
            )
        })
         return(  
            <div className = { styles.Right } >    
                    <div className = { styles.seperate }></div>     
                    <div className = { styles['student-parameter']}>{Comments}</div>
            </div>

        ) 
    }
}