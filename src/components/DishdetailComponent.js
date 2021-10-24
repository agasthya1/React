import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



class DishDetail  extends Component {

	constructor(){
      super();
      this.state = {
		 	
		 };

 	}

 	
   renderComments(comments){

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


	renderDish(dish){
        if (dish != null)
	    	return (
	    		<>
		    		<div  className="col-12 col-md-5 m-1">
			    		<Card >
			              <CardImg width="100%" src={dish.image} alt={dish.name} />
				            <CardBody>
				                <CardTitle >{ dish.name} </CardTitle> 
				                <CardText> {dish.description} </CardText>
				             </CardBody>
			            </Card>

		             </div>
		             <div className="col-12 col-md-5 m-1">
                          { this.renderComments(this.props.selectedDish.comments)}

		             </div>
	             </>
	    		);
	    else
	    	return(
	    		<div className="col-12">
	    		</div>

	    		);
    }

	render(){
		

		return(
		         <div className="row">
                       
                       { this.renderDish(this.props.selectedDish)}
                      
			     </div>

			);
	}


}

export default DishDetail;