import React from 'react'
import { ActionT } from '../Redux/action_creators';
import { NavLink } from "react-router-dom";


const Card = (cardItem:ActionT) => {

  return (  
{/* <>
<img
             src={cardItem.ProductImg}
             alt="image"
             className="card_img responsive"
           />
           <div className="card_info">
             <span className="card_category">{cardItem.Description} </span>
             <br />
             <h4>{cardItem.itemName}</h4>
             <h4 className="card_price">₹ {cardItem.price}.00</h4>
             <a href="" target="_blank" />
   
             <div className="Details">
               <NavLink to={`/details/${cardItem.id}`}> Details</NavLink>
             </div>
           </div>
  
</> */}
  )
}

export default Card;
