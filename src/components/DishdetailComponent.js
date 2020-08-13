import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';


   


    function RenderDish({dish}){
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


    function RenderComments({comments}) {
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

    const DishDetail = (props) => {
        if (props.dish != null){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        )
    }

    }


export default DishDetail;