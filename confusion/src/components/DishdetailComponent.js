import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    Modal, ModalHeader,ModalBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
    Row,Col,Label } from 'reactstrap';
    import { Control, LocalForm, Errors } from "react-redux-form";
import moment from 'moment';
import { Link } from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
    }  
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  
    handleSubmit(values) {
      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values));
    }
  
    render() {
      return (
        <div>
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil" /> Submit Comment
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={this.handleSubmit}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={12}>
                    Rating
                  </Label>
                  <Col md={{ size: 12 }}>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author" md={12}>
                    Your Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less"
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={12}>
                    Comment
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows={5}
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
  
    function RenderDish({dish}){ 
       
        if(dish != null){
            return(
               
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
                </div>
                
            );

        }
        else{
            return (
                <div></div>
            )
        }
    }

    function RenderComments({comments}){ 
        if(comments != null){ 
            const selectedCmt= comments.map((comment)=>{
                const date = moment(comment.date).format('MMM DD, YYYY');
                return(
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                <p>-- {comment.author}, {date}</p>
                    </li>
                    
                );
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {selectedCmt}
                    </ul>
                    <CommentForm />
                </div>
            );
        }
        else{
            return (
                <div></div>
            )
        }

    }

    const DishDetail = (props) =>{
      
    const selectedDish = props.dish;
    if(selectedDish != null){
        console.log('selectedDish',selectedDish )
        const dishItem = <RenderDish dish = {selectedDish} />;
        const comments = <RenderComments comments = {props.comments} />;
        
            return (
              <div className = "container">
                   <div className="row">
                    <Breadcrumb>
                    
                    <BreadcrumbItem><Link to ='/menu'>Menu </Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {dishItem}
                    {comments}
                   
                </div>

                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


export default DishDetail;