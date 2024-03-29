import React, { useState } from "react";
import "./Footer.css";
import { TbWorld } from "react-icons/tb";

function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="footer">
      <div className="foot_one">
        <p>Back to top</p>
      </div>
      <div className="foot_two">
        <div>
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelator</li>
            <li>Protect and Build Your Brand </li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <h4>Let Us Help You</h4>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="foot_three">
        <div className="foot_three_options">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/017/542/original/amazon-logo-free-png.png"
            alt="Amaz"
            className="amazon_logo"
          />
          <select id="language" name="language" value={selectedLanguage} onChange={handleChange}  >
             <label> <TbWorld /> </label>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
         
        </div>
        <div className="country_listings">
          <p>Australia</p>
          <p>Brazil</p>
          <p>Cannada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p> <br />
          <p>United Kingdom</p>
          <p>United States</p>
        </div>
      </div>
      <div className="foot_four">
        <div>
          <h6>AbeBooks</h6>
          <a href="#">
            Books, art <br />& collectibles
          </a>
        </div>
        <div>
          <h6>Amazon Web Services</h6>
          <a href="#">
            Scalable Cloud
            <br />
            Computing Services
          </a>
        </div>
        <div>
          <h6>Audiable</h6>
          <a href="#">
            Download
            <br />
            Audio Books
          </a>
        </div>
        <div>
          <h6>IMDb</h6>
          <a href="#">
            Movies, TV <br />& Celebrities
          </a>
        </div>
        <div>
          <h6>Shopbop</h6>
          <a href="#">
            Designer
            <br />
            Fashion Brands
          </a>
        </div>
        <div>
          <h6>Amazon Business</h6>
          <a href="#">
            Everything For
            <br />
            Your Business
          </a>
        </div>
        <div>
          <h6>Prime Now</h6>
          <a href="#">
            2-Hour Delivery
            <br />
            on Everyday Items
          </a>
        </div>
        <div>
          <h6>Amazon Prime Music</h6>
          <a href="#">
            100 million songs, ad-free <br />
            Over 15 million podcast episodes
          </a>
        </div>
      </div>
      <div className="foot_five">
        <div className="foot_five_option">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
