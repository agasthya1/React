import React, {Component} from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




 	
   function RenderComments({comments}){

   	        const comment = comments.map(
   	        	(item) =>{
   	        	return(
	   	        	  <li>
	   	        	     <p>{item.comment}</p>
	   	        	     <p> --{item.author}, 
	   	        	      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(item.date))}</p>
	   	        	  </li>
   	        	  );
   	        	}
   	        	);
            
            return(
	             <ul class="list-unstyled">
	               <h4> Comments </h4>
	               {comment}
	             </ul>
            	);
   }


	function RenderDish({dish}){
        if (dish != null)
	    	return (
	    		
		    		<div  className="col-12 col-md-5 m-1">
			    		<Card >
			              <CardImg width="100%" src={dish.image} alt={dish.name} />
				            <CardBody>
				                <CardTitle >{ dish.name} </CardTitle> 
				                <CardText> {dish.description} </CardText>
				             </CardBody>
			            </Card>

		             </div>
		           
	             
	    		);
	    else
	    	return(
	    		<div className="col-12">
	    		</div>

	    		);
    }

	const DishDetail = (props) => {
		

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
                    
                        <RenderDish dish={props.dish} />
                    
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>

			);
	}




export default DishDetail;