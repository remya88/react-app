import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';


class DishDetail extends Component {
    
    renderDish(dish){ 
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
    renderComments(comments){
        if(comments != null){
            console.log("inside comments", comments)
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
                </div>
            );
        }
        else{
            return (
                <div></div>
            )
        }

    }
    render() {
      
    const selectedDish = this.props.dish;
    if(selectedDish != null){
        const dishItem = this.renderDish(selectedDish);
        const comments = this.renderComments(selectedDish.comments);
            return (
              <div className = "container">
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
}

export default DishDetail;