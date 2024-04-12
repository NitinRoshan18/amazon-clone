import React, { useState } from "react";
import "./Header.css";
import { CiLocationOn } from "react-icons/ci";
import { SiGooglelens } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Sidebar from "./Sidebar";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/" className="link-button">
        <div className="logo">
          <img
            className="header_logo "
            src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
            alt="Amazon Logo"
          />
          <span>.in</span>
        </div>
      </Link>

      <div className="header_address border">
        <CiLocationOn className="header_location" />
      </div>
      <div className="header_address border">
        <span className="header_option-lineOne">Delivering To Patna</span>
        <span className="header_option-lineTwo">Update Location</span>
      </div>

      <div className="header_search ">
        <select className="dropdown" selected>
          <option value="option1">All Categories</option>
          <option value="option2">Alexa Skills</option>
          <option value="option3">Amazon Devices</option>
          <option value="option4">Amazon Fashion</option>
          <option value="option5">Amazon Pharmacy</option>
          <option value="option6">Appliances</option>
          <option value="option7">Apps & Games</option>
          <option value="option8">Audiable Audiobooks</option>
          <option value="option9">Baby</option>
          <option value="option10">Beauty</option>
          <option value="option11">Books</option>
          <option value="option12">Car & Motorbike</option>
          <option value="option13">Clothing & Accessories</option>
          <option value="option14">Collectibles</option>
          <option value="option15">Computers & Accessories</option>
          <option value="option16">Deals</option>
          <option value="option17">Electronics</option>
          <option value="option18">Furniture</option>
          <option value="option19"> Garden & Outdoor</option>
          <option value="option20">Gifts Cards</option>
          <option value="option21">Option 21</option>
          <option value="option22">Option 22</option>
          <option value="option23">Option 23</option>
          <option value="option24">Option 24</option>
          <option value="option25">Option 25</option>
          <option value="option26">Option 26</option>
          <option value="option27">Option 27</option>
          <option value="option28">Option 28</option>
          <option value="option29">Option 29</option>
          <option value="option30">Option 30</option>
          <option value="option31">Option 31</option>
          <option value="option32">Option 32</option>
          <option value="option33">Option 33</option>
          <option value="option34">Option 34</option>
          <option value="option35">Option 35</option>
          <option value="option36">Option 36</option>
          <option value="option37">Option 37</option>
          <option value="option38">Option 38</option>
          <option value="option39">Option 39</option>
          <option value="option40">Option 40</option>
        </select>

        <input
          className="header_search-input"
          type="text"
          placeholder="Search Amazon.in"
        />
        <SiGooglelens className="header_search-lens" />
        <IoSearch className="header_search-icon" />
      </div>

      <div className="header_nav">
        <div className="header_option border">
          <div class="language-dropdown">
            <button class="dropdown-button">
              <img
                src="https://flagsapi.com/IN/flat/64.png"
                alt="English"
                className="header_language"
              />
              EN
            </button>
            <div class="dropdown-content">
              <a href="hello.com" data-lang="en-IN">
                English (IN)
              </a>
              <a href="hello.com" data-lang="hi-IN">
                हिन्दी - HI
              </a>
              <a href="hello.com" data-lang="bn-IN">
                বাংলা - BN
              </a>
              <a href="hello.com" data-lang="mr-IN">
                मराठी - MR
              </a>
              <a href="hello.com" data-lang="kn-IN">
                ಕನ್ನಡ - KN
              </a>
              <a href="hello.com" data-lang="ta-IN">
                தமிழ் - TA
              </a>
              <a href="hello.com" data-lang="te-IN">
                తెలుగు - TE
              </a>
              <a href="hello.com" data-lang="gu-IN">
                ગુજરાતી - GU
              </a>
            </div>
          </div>
        </div>

        <Link to={!user && "/login"} className="link-button">
          <div onClick={handleAuthentication} className="header_option border">
            <span className="header_option-lineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>

            <span className="header_option-lineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option border">
          <span className="header_option-lineOne">Returns</span>
          <span className="header_option-lineTwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionCart border">
            <BsCart2 className="header_basketIcon" />
            <span className="header_option-lineTwo header_cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="header_cart">Cart</div>
    </div>
  );
}

function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="sub_header">
      <div>
        <span className="sub_header-link border" onClick={toggleSidebar}>
          <TfiMenu />
          All
        </span>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <a href="hello.com" className="sub__header-link border">
        Amazon MiniTv
      </a>
      <a href="hello.com" className="sub__header-link border">
        Sell
      </a>
      <a href="hello.com" className="sub__header-link border">
        Best Sellers
      </a>
      <a href="hello.com" className="sub__header-link border">
        Mobiles
      </a>
      <a href="hello.com" className="sub__header-link border">
        Today's Deals
      </a>
      <a href="hello.com" className="sub__header-link border">
        Electronics
      </a>
      <a href="hello.com" className="sub__header-link border">
        Prime
      </a>
      <a href="hello.com" className="sub__header-link border">
        Customers Service
      </a>
      <a href="hello.com" className="sub__header-link border">
        News Releases
      </a>
      <a href="hello.com" className="sub__header-link border">
        Home & Kitchen
      </a>
      <a href="hello.com" className="sub__header-link border">
        Gift ideas
      </a>
      <a href="hello.com" className="sub__header-link border">
        Fashion
      </a>
      <a href="hello.com" className="sub__header-link  border">
        Amazon Pay
      </a>
      <a href="hello.com" className="sub__header-link  border">
        Computers
      </a>
      <a href="hello.com" className="sub__header-link  border">
        Books
      </a>
      <a href="hello.com" className="sub__header-link  border">
        Toys & Games
      </a>
    </div>
  );
}

export { Header, SubHeader };
