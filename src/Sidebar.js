import React, { useState } from "react";
import "./Sidebar.css";
import { RxAvatar } from "react-icons/rx";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <button className="sidebar__close-btn" onClick={() => setIsOpen(false)}>
        <span className="sidebar__close-btn-icon">&times;</span>
      </button>
      <h2>
        <RxAvatar id="user_icon" />
        Hello, Sign in
      </h2>
      <nav className="sidebar_nav">
        <br/>
        <h3>Trending</h3>
        <ul className="sidebar_list">
          <li className="sidebar_item">Best Sellers</li>
          <li className="sidebar_item">New Releases</li>
          <li className="sidebar_item">Movers and Shakers</li>
        </ul>
        <hr />
        <h3>Digital Content and Devices</h3>
        <ul className="sidebar_list">
          <li className="sidebar_item">Amazon miniTV- FREE entertainment</li>
          <li className="sidebar_item">Echo & Alexa</li>
          <li className="sidebar_item">Fire TV</li>
          <li className="sidebar_item">Kindle E-Readers & eBooks</li>
          <li className="sidebar_item">Audiable Audiobooks</li>
          <li className="sidebar_item">Amazon Prime Video</li>
          <li className="sidebar_item">Amazon Prime Music</li>
        </ul>
        <hr />
        <h3>Shop by Category</h3>
        <ul className="sidebar_list">
          <li className="sidebar_item">Mobiles, Computers</li>
          <li className="sidebar_item">TV, Appliances, Electronics</li>
          <li className="sidebar_item">Men's Fashion</li>
          <li className="sidebar_item">Women's Fashion</li>
          <li className="sidebar_item">See all</li>
        </ul>
        <hr />
        <h3>Programs & Features</h3>
        <ul className="sidebar_list">
          <li className="sidebar_item">Amazon Pay</li>
          <li className="sidebar_item">Gift Cards & Mobile Recharges</li>
          <li className="sidebar_item">Amazon Launchpads</li>
          <li className="sidebar_item">Handlooms & Handicrafts</li>
          <li className="sidebar_item">See all</li>
        </ul>
        <hr />
        <h3>Help & Settings</h3>
        <ul className="sidebar_list">
          <li className="sidebar_item">Your Account</li>
          <li className="sidebar_item">Customers Service</li>
          <li className="sidebar_item">Sign in</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
