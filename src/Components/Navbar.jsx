import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Summary from "./Summary";
// import { mycontext } from "../App";
// // import  from "../App";

const Navbar = ({ totalPrice, totalCartValue }) => {


  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className={"navlink"}>
            <div className="navbar-brand rounded p-2">Products</div>
          </NavLink>
          <ul className="navbar-nav d-flex flex-row align-items-center p-2 rounded">
            <NavLink to="/summary" className={"navlink"}>
              <div className="nav-item fs-5 me-2 p-2 rounded">

                <li >Cart <i class="fa-solid fa-cart-shopping"></i><sup className="p-2 align-items-center ms-1 badge bg-light" >{totalCartValue}</sup></li>
              </div>
            </NavLink>
            <div className="nav-item fs-5 me-2 p-2 rounded">
              <b>Cart Value: Rs. {totalPrice}/-</b>

            </div>

          </ul>
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
