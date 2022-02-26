import React from "react";

import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonLinesFill, BsBagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container">
      <div id="nav-container">
        <div id="nav-right">
          <div id="nav-title">Namshi</div>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Kids</a>
        </div>
        <div id="nav-left">
          <div className="inputContainer">
            <input type="text" placeholder="Search over 1300 brands" />
            <i>
              <AiOutlineSearch />{" "}
            </i>
          </div>
          <i className="icon">
            <AiOutlineHeart />
          </i>
          <i className="icon">
            <BsFillPersonLinesFill />{" "}
          </i>
          <i className="icon">
            <BsBagFill />{" "}
          </i>
        </div>
      </div>
      <div id="nav-categories">
        <a href="#" >New Arrivals</a>
        <a href="#">Clothing</a>
        <a href="#">Shoes</a>
        <a href="#">Bag</a>
        <a href="#">Accessories</a>
        <a href="#">Premium</a>
        <a href="#">Homeware</a>
        <a href="#">Sports</a>
        <a href="#">Shop By Age</a>
        <a href="#">Brands</a>
        <a href="#">Gifts</a>
        <a href="#">Sale</a>
        <a href="#">All Girls</a>
        <a href="#">All Boys</a>
      </div>
    </div>
  );
};

export default Navbar;
