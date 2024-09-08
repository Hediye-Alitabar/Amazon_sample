import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Shop from "../../public/images/shop.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Product = ({ setCart, cart }) => {
  const [product, setProduct] = useState(null);
  const [styleText, setStyleText] = useState("7320U");
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showMoreAboutItem, setShowMoreAboutItem] = useState(false);
  const [showMoreShopping, setShowMoreShopping] = useState(false);
  const [addToCard, setAddToCard] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("There was a problem fetching the product: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = (newText) => {
    setStyleText(newText);
  };

  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const toggleShowMoreAboutItem = () => {
    setShowMoreAboutItem(!showMoreAboutItem);
  };

  const addToCart = (product) => {
    if (!addToCard) {
      setCart([...cart, product]);
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
    setAddToCard(!addToCard);
  };

  return (
    <div className="page">
      <div className="shop">
        <img src={Shop} alt="shop" />
      </div>
      <div className="container">
        <div className="product-img-container">
          <img src={product.img} alt={product.name} className="product-img"
          />
        </div>
        <div className="details">
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <a href="">Visit the acer Store</a>
          <div className="rates">
            <div className="rating-left">
              <span>4.3</span>
              <div>Rating ...</div>
            </div>
            <div className="rating-right">
              <span>1,752 ratings</span>
              <hr />
              <span>search this page</span>
            </div>
          </div>
          <p>6K+ bought in past month</p>
          <hr className="details-first-hr" />
          <div>
            <div className="price-details">
              <div className="percentage">-7%</div>
              <div className="product-price">
                <p>
                  <sup>$</sup>
                </p>
                <p className="product-new-price">{product.lastPrice}</p>
                <p>
                  <sup>99</sup>
                </p>
              </div>
            </div>
            <p className="product-last-price">
              List Price: <span>$321.99</span>
            </p>
            <div className="shipping">
              <p>$91.31 Shipping & Import Fees Deposit to Iran</p>
              <div className="shipping-details">
                <p>Details</p>
                <div>
                  <KeyboardArrowDownIcon
                    style={{ width: "12px", height: "12px", display: "flex" }}
                  />
                </div>
              </div>
            </div>
            <p>
              Available at a lower price from
              <a className="other-sellers" href="">
                other sellers
              </a>
              that may not offer free Prime shipping.
            </p>
            <div>
              <a href="#" className="saving">
                <div className="extra-saving">Extra Savings</div>
                <p>
                  Amazon Music offer with this purchase 1 Applicate Promotion
                </p>
                <KeyboardArrowDownIcon
                  style={{ width: "12px", height: "12px", display: "flex" }}
                />
              </a>
            </div>
          </div>
          <hr className="details-second-hr" />
          <div>
            <p>
              Style: <span>{styleText}</span>
            </p>
          </div>
          <div className="style-btns">
            <button
              onClick={() => handleButtonClick("R3 7320U")}
              className={
                styleText === "R3 7320U" ? "style-btn-selected" : "style-btn"
              }
            >
              <p>R3 7320U</p>
              <p className="price-btn">$299.99</p>
            </button>
            <button
              onClick={() => handleButtonClick("R7 5700U")}
              className={
                styleText === "R7 5700U" ? "style-btn-selected" : "style-btn"
              }
            >
              <p>R7 5700U</p>
              <p className="price-btn">$499.99</p>
            </button>
          </div>
          <div className="info-container">
            <div>
              <p>Brand</p>
              <p>Model Name</p>
              <p>Screen Size</p>
              <p>Color</p>
              <p>Hard Disk Size</p>
              <p>CPU Model</p>
              <p> Ram Memory Installed Size</p>
              {showMoreDetails && (
                <div>
                  <p>Operation System</p>
                  <p>Special Feature</p>
                  <p>Graphics Card Description</p>
                </div>
              )}
            </div>
            <div>
              <p>{product.brand}</p>
              <p>{product.modelName}</p>
              <p>{product.screenSize}</p>
              <p>{product.color}</p>
              <p>{product.hardDiskSize}</p>
              <p>{product.cpuModel}</p>
              <p>{product.ramMmoryInstalledSize}</p>
              {showMoreDetails && (
                <div>
                  <p>{product.operationSystem}</p>
                  <p>{product.specialFeature}</p>
                  <p>{product.GraphicsCardDescription}</p>
                </div>
              )}
            </div>
          </div>
          <div className="see-more-info">
            <div>
              <KeyboardArrowDownIcon
                style={{
                  width: "12px",
                  height: "12px",
                  display: "flex",
                  color: "rgb(0,113,113)",
                }}
              />
            </div>
            <button className="see-more-btn" onClick={toggleShowMoreDetails}>
              {showMoreDetails ? "Show Less" : "Show More"}
            </button>
          </div>
          <hr style={{ color: "rgb(51,65,85)", height: "1px" }} />
          <div>
            <p>About this item</p>
            <ol>
              <li>
                <p>
                  Purposeful Design: Travel with ease and look great doing it
                  with the Aspire's 3 thin, light design.
                </p>
              </li>
              <li>
                <p>
                  Ready-to-Go Performance: The Aspire 3 is ready-to-go with the
                  latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal
                  for the entire family, with performance and productivity at
                  the core.
                </p>
              </li>
              <li>
                <p>
                  Visibly Stunning: Experience sharp details and crisp colors on
                  the 15.6" Full HD IPS display with 16:9 aspect ratio and
                  narrow bezels.
                </p>
              </li>
              <li>
                <p>
                  Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
                  solid-state drive storage to store your files and media
                </p>
              </li>
              <li>
                <p>
                  The HD front-facing camera uses Acer’s TNR (Temporal Noise
                  Reduction) technology for high-quality imagery in low-light
                  conditions. Acer PurifiedVoice technology with AI Noise
                  Reduction filters out any extra sound for clear communication
                  over online meetings.
                </p>
              </li>
              <li>
                <p>
                  Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent
                  wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO
                  technology.
                </p>
              </li>
              <li>
                <p>
                  Improved Thermals: With a 78% increase in fan surface area,
                  enjoy an improved thermal system and an additional 17% thermal
                  capacity. Allowing for longer, more efficient work sessions
                  while not plugged in.
                </p>
              </li>
              {showMoreAboutItem && (
                <div>
                  <li>
                    Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2
                    Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB
                    Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with
                    HDCP support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for
                    AC adapter
                  </li>
                  <li>
                    What's In the Box: Acer Aspire Laptop, AC Adapter, Power
                    Cord
                  </li>
                  <li>Keyboard backlight not present on this model</li>
                </div>
              )}
            </ol>
            <div className="see-more-info">
              <div>
                <KeyboardArrowDownIcon
                  style={{
                    width: "12px",
                    height: "12px",
                    display: "flex",
                    color: "rgb(0,113,113)",
                  }}
                />
              </div>
              <button className="see-more-btn" onClick={toggleShowMoreAboutItem}>
                {showMoreAboutItem ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="report">
              <a href="#" className="report-link">
                <ChatOutlinedIcon />
                <p>Report an issue with this product or seller</p>
              </a>
              <p className="product-note-description">
                <span className="product-note">Note: </span>Products with
                electrical plugs are designed for use in the US. Outlets and
                voltage differ internationally and this product may require an
                adapter or converter for use in your destination. Please check
                compatibility before purchasing.
              </p>
            </div>
          </div>
          <hr className="last-hr" />
        </div>
        <div className="shopping-container">
          <div>
            <p>buy now:</p>
            {/* img */}
          </div>
          <div className="product-price-buy">
            <p>
              <sup>$</sup>
            </p>
            <p className="product-new-price">{product.lastPrice}</p>
            <p>
              <sup>99</sup>
            </p>
          </div>
          <p className="details-delivery">
            $91.31 Shipping & Import Fees Deposit to The Netherlands Details
            Delivery <span>Wednesday, May 15</span>
          </p>
          <a className="delivery-location-buy" href="">
            <PlaceOutlinedIcon style={{ fontSize: "12px" }} />
            Deliver to Iran
          </a>
          <p className="in-stock">In Stock</p>
          <div>
            <select
              name="quantity"
              id="quantity"
              className="quantity-selection"
            >
              <option value="1">Quantity: 1</option>
              <option value="2">Quantity: 2</option>
              <option value="3">Quantity: 3</option>
              <option value="4">Quantity: 4</option>
              <option value="5">Quantity: 5</option>
              <option value="6">Quantity: 6</option>
              <option value="7">Quantity: 7</option>
              <option value="8">Quantity: 8</option>
              <option value="9">Quantity: 9</option>
              <option value="10">Quantity: 10</option>
              <option value="11">Quantity: 11</option>
              <option value="12">Quantity: 12</option>
              <option value="13">Quantity: 13</option>
              <option value="14">Quantity: 14</option>
              <option value="15">Quantity: 15</option>
              <option value="16">Quantity: 16</option>
              <option value="17">Quantity: 17</option>
              <option value="18">Quantity: 18</option>
              <option value="19">Quantity: 19</option>
              <option value="20">Quantity: 20</option>
              <option value="21">Quantity: 21</option>
              <option value="22">Quantity: 22</option>
              <option value="23">Quantity: 23</option>
              <option value="24">Quantity: 24</option>
              <option value="25">Quantity: 25</option>
              <option value="26">Quantity: 26</option>
              <option value="27">Quantity: 27</option>
            </select>
            <button
              onClick={() => addToCart(product)}
              className="add-to-card-btn"
            >
              {addToCard ? "Remove from cart" : "Add to cart"}
            </button>
            <div className="shopping-details">
              <div className="ships-form">
                <p>Ships form</p>
                <p>Amazon.com</p>
              </div>
              <div className="sold-by">
                <p>Sold by</p>
                <p>Amazon.com</p>
              </div>
              <div className="returns">
                <p>Returns</p>
                <p className="returns-description">
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </p>
              </div>
              <div className="payments">
                <p>Payments</p>
                <p className="payments-description">Secure transaction</p>
              </div>
              {showMoreShopping && (
                <div className="product-support">
                  <p>Supports</p>
                  <p>Product support included</p>
                </div>
              )}
              <div>
                <p
                  className="see-more-buy"
                  onClick={() => setShowMoreShopping(!showMoreShopping)}
                >
                  {showMoreShopping ? "Show Less" : "See More"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
