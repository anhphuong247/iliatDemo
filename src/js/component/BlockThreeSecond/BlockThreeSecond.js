import React from "react";
import styles from "./BlockThreeSecond.css";
export default class BlockThreeSecond extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: './json/jsonGmat/page-block-three.json',
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
            <div key={comment.id}  > 
                 <div class="fade_right">    
                    <p className={styles['title_where']}>
                    Những kiến thức bạn sẽ học tại ILIAT
                    </p>
                    <ul className={styles['skill-list']}>
                        <li>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleOne)}></strong>
                                 <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineOne)}></span>
                               
                            </div>
                        </li>
                        <li>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>
                                 <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleTwo)}></strong>
                                 <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineTwo)}></span>
                            </div>
                        </li>
                        <li>
                            <img src={comment.url}/>    
                            <div className={styles['skill-item']}>
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleThree)}></strong>
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineThree)}></span>
                            </div>  
                        </li>
                        <li>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>    
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleFour)}></strong>
                            </div>
                        </li>
                        <li className={styles['smail-arrow']}>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleFive)}></strong>
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineFour)}></span>
                            </div>
                        </li>
                        <li className={styles['smail-arrow']}>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleSix)}></strong>
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineFive)}></span>  
                            </div>
                        </li>
                        <li className={styles['smail-arrow']}>
                            <img src={comment.url}/> 
                            <div className={styles['skill-item']}>
                                <strong dangerouslySetInnerHTML={this.rawMarkup(comment.TitleSeven)}></strong>
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineSix)}></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            )
         })
        return(
            <div>{Comments}</div>
        ) 
    }
}