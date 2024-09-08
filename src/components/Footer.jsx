import React from "react";
import AmazonImg from "../../public/images/amazon.png";


const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <p className="back-to-top">Back to top</p>
      </a>
      <div className="texts">
      <div>
        <p className="topic-text"><strong>Get to Know Us</strong></p>
        <ul>
          <li className="text"><a href="#">Careers</a></li>
          <li className="text"><a href="#">Blog</a></li>
          <li className="text"><a href="#">About Amazon</a></li>
          <li className="text"><a href="#">Investor Relations</a></li>
          <li className="text"><a href="#">Amazon Devices</a></li>
          <li className="text"><a href="#">Amazon Science</a></li>
        </ul>
      </div>
      <div>
        <p className="topic-text"><strong>Amazon Payment Products</strong></p>
        <li className="text"><a href="#">Amazon Business Card</a></li>
        <li className="text"><a href="#">Shop with Points</a></li>
        <li className="text"><a href="#">Reload Your Balance</a></li>
        <li className="text"><a href="#">Amazon Currency Converter</a></li>
      </div>
      <div>
        <p className="topic-text"><strong>Make Money with Us</strong></p>
        <li className="text"><a href="#">Sell products on Amazon</a></li>
        <li className="text"><a href="#">Sell on Amazon Business</a></li>
        <li className="text"><a href="#">Sell apps on Amazon</a></li>
        <li className="text"><a href="#">Become an Affiliate</a></li>
        <li className="text"><a href="#">Advertise Your Products</a></li>
        <li className="text"><a href="#">Self-Publish with Us</a></li>
        <li className="text"><a href="#">Host an Amazon Hubs</a></li>
        <li className="text"><a href="#">See More Make Money with Usv</a></li>
      </div>
      <div>
        <p className="topic-text"><strong>Let Us Help You</strong></p>
        <li className="text"><a href="#">Amazon and COVID-19</a></li>
        <li className="text"><a href="#">Your Account</a></li>
        <li className="text"><a href="#">Your Orders</a></li>
        <li className="text"><a href="#">Shipping Rates & Policies</a></li>
        <li className="text"><a href="#">Returns & Replacements</a></li>
        <li className="text"><a href="#">Manage Your Content and Devices</a></li>
        <li className="text"><a href="#">Amazon Assistant</a></li>
        <li className="text"><a href="#">Help</a></li>
      </div>
      </div>
      <hr/>
      <div className="links">
        {/* <a href="#">
          <img src={AmazonImg} alt="" />
        </a> */}
        <div><p>English</p></div>
        <div><p><span>$</span>USD - U.s Dollor</p></div>
        <div><p>United States</p></div>
      </div>
    </div>
  );
};

export default Footer;
