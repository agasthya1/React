import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from 'F:/t2/react/confusion/src/components/DishdetailComponent';

	
   
    
   function RenderDish({dish}){

    
	      return (
	              <Card >
	                             <CardImg width="100%" src={dish.image} alt={dish.name} />
	                             <CardImgOverlay>
	                                <CardTitle>{dish.name}</CardTitle> 
	                             </CardImgOverlay>
	                     </Card>
	            
	      );  

        
    }

	const Menu = (props) => {
		const menu = props.dishes.map((dish) =>{

			return (
                   <div key={dish.id} className="col-12 col-md-5 m-1">
                     <RenderDish dish = {dish} />
                   </div>
				);

		}
			);
		return (
			<div className="container">
			     <div className="row">
                       {menu}
			     </div>
			    
			</div>
			);
	}



export default Menu;