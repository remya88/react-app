import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';



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
                console.log("inside map", comment)
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

    const DishDetail = (props) =>{
      
    const selectedDish = props.dish;
    if(selectedDish != null){
        console.log('selectedDish',selectedDish )
        const dishItem = <RenderDish dish = {selectedDish} />;
        const comments = <RenderComments comments = {selectedDish.comments} />;
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


export default DishDetail;