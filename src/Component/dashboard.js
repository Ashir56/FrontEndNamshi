import React, { useState, useEffect } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdArrowDropDownCircle } from "react-icons/md";
function Dashboard() {
  const [home, setHome] = useState(false);
  const [user, setUser] = useState(false);
  const [order, setOrder] = useState(false);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);

  const HomelistOn = () => {
    setHome(!home);
  };

  const OrderlistOn = () => {
    setOrder(!order);
  };

  const UserlistOn = () => {
    setUser(!user);
  };

  const ProfilelistOn = () => {
    setProfile(!profile);
  };

  const ProductlistOn = () => {
    setProduct(!product);
  };

  return (
    <div id="dashboard-container">
      <div className="dashboard-button">
        <button onClick={HomelistOn}>
          <i>
            {home ? <MdArrowDropDownCircle /> : <IoMdArrowDroprightCircle />}
          </i>
          Home
        </button>
      </div>
      <div className="home-list">
        <ul id={home ? "list-on" : "list-off"}>
          <li>All Home</li>
          <li>All Ashir</li>
        </ul>
      </div>
      <div className="dashboard-button">
        <button onClick={UserlistOn}>
          <i>
            {user ? <MdArrowDropDownCircle /> : <IoMdArrowDroprightCircle />}
          </i>
          Users
        </button>
      </div>
      <div className="home-list">
        <ul id={user ? "list-on" : "list-off"}>
          <li>All Shawty</li>
          <li>All Baby</li>
        </ul>
      </div>
      <div className="dashboard-button">
        <button onClick={ProductlistOn}>
          <i>
            {product ? <MdArrowDropDownCircle /> : <IoMdArrowDroprightCircle />}
          </i>
          Product
        </button>
      </div>
      <div className="home-list">
        <ul id={product ? "list-on" : "list-off"}>
          <li>Add Products</li>
          <li>Update Products</li>
          <li>Delete Product</li>
          <li>View Product</li>
        </ul>
      </div>
      <div className="dashboard-button">
        <button onClick={OrderlistOn}>
          <i>
            {order ? <MdArrowDropDownCircle /> : <IoMdArrowDroprightCircle />}
          </i>
          Orders
        </button>
      </div>
      <div className="home-list">
        <ul id={order ? "list-on" : "list-off"}>
          <li>All Products</li>
          <li>All Products</li>
        </ul>
      </div>
      <div className="dashboard-button">
        <button onClick={ProfilelistOn}>
          <i>
            {profile ? <MdArrowDropDownCircle /> : <IoMdArrowDroprightCircle />}
          </i>
          Profile
        </button>
      </div>
      <div className="home-list">
        <ul id={profile ? "list-on" : "list-off"}>
          <li>All Products</li>
          <li>All Products</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
