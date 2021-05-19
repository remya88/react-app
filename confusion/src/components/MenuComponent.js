import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
           selectedDish : null
        };
        console.log('menu component constructor is called')
    }
    componentDidMount(){
        console.log('menu component componentDidMount is called')
    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        });
        console.log(this.state.selectedDish)
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log('menu component render method is called')
        return(
            <div className="container">
                <div className="row">              
                        {menu}
                </div>
            
                <DishDetail selectedDishes = {this.state.selectedDish}></DishDetail>
          </div>
        );
    }
}
export default Menu;