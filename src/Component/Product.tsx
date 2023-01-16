import React, { useState, useEffect } from "react";
import CardsData from "./CardsData";
// import styled from 'styled-components';
import "./Product.css";
import { NavLink } from "react-router-dom";
import { ActionT } from "../Redux/action_creators";



const Product = () => {
  const [data, setData] = useState(CardsData);

  // const cardItem = (props: ActionT) => {
  //   return 
      // <div className="card cart_responsive" key={props.id}>
      //   <img
      //     src={props.ProductImg}
      //     alt="image"
      //     className="card_img responsive"
      //   />
      //   <div className="card_info">
      //     <span className="card_category">{props.Description} </span>
      //     <br />
      //     <h4>{props.itemName}</h4>
      //     <h4 className="card_price">₹ {props.price}.00</h4>
      //     <a href="" target="_blank" />

      //     <div className="Details">
      //       <NavLink to={`/details/${props.id}`}> Details</NavLink>
      //     </div>
      //   </div>
      // </div>
    
  // };
  return (
    <>
      <div className="cards">
       <div className="card_second">
          {data.map((cardItem)=>{
          return(
           <div className="card cart_responsive" key={cardItem.id}>
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
         </div>
         )}
)}
       </div>
       </div>
    </>
  );
};

export default Product;
