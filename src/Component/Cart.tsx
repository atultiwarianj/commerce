import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { ActionT, delCart } from "../Redux/action_creators/index";
import { useSelector } from 'react-redux';
import { State } from "../Redux/reducers";

const getCartData = () => {
  const data = localStorage.getItem("cartData");
  if (data) {
    return JSON.parse(data);
  } else return [];
};

const Cart = () => {
  const [newData, setNewData] = useState(getCartData());
  const [price, setPrice] = useState(0) //price
  const state = useSelector((state:State) => state.handleCart.cart);

  const dispatch = useDispatch();

  //Remove Item 
  const handleRemoveFromCart = (id : ActionT) => {
    dispatch(delCart(id));
  };

  //total price

 const total = ()=>{
  let price =0;
  state.map((e : ActionT,i: number) =>{
    price = (e.price) * e.qty + price
  }) 
  setPrice(price)
  console.log("price",price)
}


useEffect(()=>{
  total()
}, [total])




  const cartItem = (props:any) => {
    return (
      <tr>
        <td>
          <div className="cart-info" key={props.id}>
            {/* {console.log(props.id)} */}
            <img src={props.ProductImg} alt="Product" className="ItemImages1" />
          </div>
        </td>
        <td>
          <p>{props.itemName}</p>
        </td>
        <td>{props.qty}</td>
        <td>{props.price}</td>

        <td>
          <button className="remove" onClick={()=>handleRemoveFromCart(props.id)}>Remove</button>
        </td>
      </tr>
      // </div>
    );
  };

  return (
    <>
      <div className="containor_cart">
        <table width="100%">
          <thead>
            <tr>
              <th>Product Image</th>
              <th> Item Name</th>
              <th>Qty</th>
              <th>Rate/Qty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{state.map(cartItem)}</tbody>
          <tfoot>
            <tr>
              <td align="right">
                Total
              </td>
              <td>₹ {price}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default Cart;
