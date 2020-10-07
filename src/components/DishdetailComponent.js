import React,{Component } from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText , Breadcrumb , BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { LocalForm , Control , Errors } from 'react-redux-form';
import {Row , Col , ModalBody , ModalHeader , Modal , Label ,Button} from 'reactstrap';




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

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {

        constructor(props){
            super(props);
            this.state={
                isOpenModal: false
            }
            this.toggleModal = this.toggleModal.bind(this);
        }
    
    
        toggleModal(){
            this.setState({
                isModalOpen : !this.state.isModalOpen
            });
        }
    
    
        handleComment(values){
            console.log("Current State is:" + JSON.stringify(values));
            alert("Current State is:" + JSON.stringify(values));
            this.setState({
                isModalOpen : !this.state.isModalOpen
            });

        }
    
    
    
        render(){
            return(
                <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
    
    
    
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleComment(values)}>
    
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="rating" >Rating</Label>
                                    <Control.select model=".rating" name="rating" 
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Control.select>
                                    </Col>
                                </Row>
    
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                                          className="form-control"
                                          validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15),
                                          }} />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} />
                                    </Col>
                                </Row>
    
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="7" 
                                         className="form-control" />
                                    </Col>
                                </Row>
    
                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
    
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </>
            );
        }
    }
    
   // export default CommentForm;
    
    

    const DishDetail = (props) => {
        if (props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <CommentForm />
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