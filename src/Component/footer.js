import React from "react";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";

const footer = () => {
  return (
    <div id="footer-container">
      <div id="upper-footer">
        <div id="upper-footer-left">
          <a>
            <AiOutlineInstagram />
          </a>
          <a>
            <FaFacebookF />
          </a>
          <a>
            <AiOutlineTwitter />
          </a>
          <a>
            <FaPinterestP />
          </a>
          <a>
            <AiFillYoutube />
          </a>
          <a>
            <BsSnapchat />
          </a>
        </div>
        <div id="upper-footer-right">
          <div id="title">Subscribe to our newsletter</div>
          <div id="line">
            <hr />
          </div>
          <div>Payment Methods</div>
        </div>
      </div>
      <div id="lower-footer">
        <div id="lower-footer-content">
          <a href="#">Other Countries</a> <a href="#">About Us</a> <a href="#">Customer Services</a>{" "}
          <a href="#">Our Top Categories</a> <a href="#" id="last">Our Top Brands</a>
        </div>
      </div>
    </div>
  );
};

export default footer;
