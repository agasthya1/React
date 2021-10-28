import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './MenuComponent';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import {DISHES} from '../shared/dishes';
;

class Main extends Component {

	constructor(props){
		super(props);

		this.state = {
			dishes : DISHES,
			selectedDish: null
		};
		this.onDishSelect = this.onDishSelect.bind(this);
	}

	onDishSelect(dish) {
    	this.setState({ selectedDish : dish});
    }

	render(){
	   return (
	      <div>
	        <Header />
	        <Menu dishes = {this.state.dishes} onClick ={(dishid) => this.onDishSelect(dishid)}/>
	        <DishDetail selectedDish={ this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
	        <Footer/>      
	      </div>
	    );
    }

}

export default Main;