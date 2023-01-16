import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import { FaLuggageCart } from 'react-icons/fa';  
// import { GiHamburgerMenu } from 'react-icons/gi';
import "./Navbar.css";



// FaLuggageCart
const Navbar = () => {
const state = useSelector((state:any)=> state.handleCart.cart) 
//  console.log("state",state)
  const [showMediaIcon, setShowMediaIcon]= useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st Logo Part */}
        <div className="logo">
          <h2>
            <span>S</span>hopping
          </h2>
        </div>
        {/* 2nd Menu Part */}
        <div className= {showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            {/* <li><NavLink  to="/"> Home</NavLink></li> */}
            <li>
              <NavLink  to="/">Product</NavLink></li>
           </ul>
        </div>
      

      {/* Add to Cart */}
      <div className="social-media cart_trolly_link">
        <ul className="social-media-desktop">
          <li>
            <NavLink  to="/cart" >
             {/* <FaLuggageCart className="cart"/> */}
                  Cart
             <span className="cart-total--item">{state.length}</span>
            </NavLink>
          </li>
        </ul>




        {/* hamburger menu */}
        <div className="hamburger-menu">
        <button onClick={()=>setShowMediaIcon(!showMediaIcon)}>
             {/* <GiHamburgerMenu className="cart" /> */}
            </button>
        
        </div>
      </div>
</nav>

      {/* herro Section */}
      <div className="hero-section">
        {/* <h2>Hello Atul Tiwari!!!</h2> */}
      </div>
    </>
  );
};

export default Navbar;
