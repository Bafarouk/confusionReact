import React,{ Component} from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.renderComments = this.renderComments.bind(this);
        
    }

   


    renderDish(dish){
        if (dish != null){
            return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText> 
                </CardBody>
            </Card>
            ); 
        }
        else{
            return(
                <div></div>
            );
        }
    }


    renderComments(comments) {
        if(comments !=null){
        const commentss= comments.map((comment)=> {
                return(
                <div>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li><br/>
                <li>-- {comment.author} , { new Intl.DateTimeFormat('en-US',{year:'numeric' , month:'short', day:'2-digit' }).format(new Date(Date.parse(comment.date))) }</li>
                    </ul>
                </div>
               );
            });

            return (
            <div>
                <h4>Comments</h4>
                {commentss}
            </div>
        );
        }
        else{
            return(
                    <div></div>
                    );
        }
        
        

    }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.dish && this.renderComments(this.props.dish.comments)}
                </div>
            </div>
            </div>
        );
    }


}

export default DishDetail;