import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AmazonImg from "../../public/images/amazon.png";
import Location from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { colors } from "@mui/material";
// import Flag from "../../public/images/flag";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div>
          <img src={AmazonImg} alt="" />
        </div>

        <div className="delivery-location">
          <div className="location-icon">
            <Location />
          </div>
          <div className="location-text">
            <span className="deliver-to">Deliver to</span>
            <span className="country">The Netherlands</span>
          </div>
        </div>
        <div>
          <form className="search-box" action="">
            <div className="dropdown">
              <p className="dropbtn">
                {/* <img src={Selection} alt="selection" /> */}
                All
                <ArrowDropDownIcon />
              </p>
              <ul className="dropdown-content">
                <li>All</li>
                <li>Mobiles</li>
                <li>Laptops</li>
                <li>Mobile Accessory</li>
              </ul>
            </div>
            <input type="text" placeholder="Search Amazon" />
            <button type="submit" className="search-btn">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="language-selection">
          {/* <img src={Flag} alt="flag" /> */}
          <p>EN</p>
          <div className="arrow-drop-down-icon">
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="accounts-lists">
          <p className="accounts-lists-sign-in">Hello, Sign in</p>
          <div className="accounts-lists-btn">
            <p>Accounts & Lists</p>
            <div>
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
        <div className="return-order"><p className="returns">Returns</p>
        <p className="orders"><strong>& Orders</strong></p></div>
        <div className="cart">
          <div className="cart-number"><span>0</span> <ShoppingCartOutlinedIcon/></div>
          <Link to={`/cart`} className="cart-link">Cart</Link>
        </div>
      </div>
      <div className="header-bottom">
        <ul className="header-items">
          <li>
            <button>All</button>
          </li>
          <li>
            <p>Today`s Deals</p>
          </li>
          <li>
            <p>Custome Service</p>
          </li>
          <li>
            <p>Registry</p>
          </li>
          <li>
            <p>Gift Cards</p>
          </li>
          <li>
            <p>Sell</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
