import React from "react";
import './dashboard.css'
import { RxDashboard } from "react-icons/rx";
import { RiBarChartFill } from "react-icons/ri";
import { MdAlignVerticalTop } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { useGetOrders } from "../files";
import { useSelector } from "react-redux";
import { selectOrders } from "../files";
import {
  Select,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import { Link, } from "react-router-dom";


const Dashboard = () => {
  const [overall, setModule] = React.useState('');

  const handleOverall = (event) => {
    setModule(event.target.value);
  }

  useGetOrders();
  const orders = useSelector(selectOrders);

  return (
    <>
      <div className="dashboard-section">
        <div className="dashboard-header">
          <div className="dash-top">
            <div className="dash-heading">
              <span className="icon">
                <RxDashboard />
              </span>
              <h2>Dashboard</h2>
            </div>
          </div>
          <div className="overall">
            <div className="statistics">
              <div className="over-top">
                <div className="over-heading">
                  <span className="icon">
                    <RiBarChartFill />
                  </span>
                  <h2>Dashboard order statistics</h2>
                </div>

                <div className="over-select">
                  <div className="select-menu" >
                   
                    <select className="s-bg" id="age" placeholder="select" name="age" value={overall} onChange={handleOverall}>
                      <option value="" className="place" > Select  </option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>

                  </div>
                </div>
              </div>
              <div className="carts">
                <div className="cart-box1">
                  <div className="cart1">
                    <div className="dashcart-icon">
                      <div className="icon-cf">
                        <img src="./images/confirem.jpg" alt="" />
                      </div>
                    </div>
                    <div className="dashcart-info">
                      <div className="confirem-count">
                        <h2>
                          {
                            orders.filter(
                              (order) => order.orderStatus === "Confirmed"
                            ).length
                          }
                        </h2>
                        <p>Confirmed</p>
                      </div>
                    </div>
                  </div>

                  <div className="cart3">
                    <div className="dashcart-icon">
                      <div className="icon-cf">
                        <img src="./images/delivery.png" alt="" />
                      </div>
                    </div>
                    <div className="dashcart-info">
                      <div className="confirem-count">
                        <h2>
                          {
                            orders.filter(
                              (order) =>
                                order.orderStatus === "Ready for Delivery"
                            ).length
                          }
                        </h2>
                        <p>Ready for delivery</p>
                      </div>
                    </div>
                  </div>
                  <div className="cart4">
                    <div className="dashcart-icon">
                      <div className="icon-cf">
                        <img src="./images/onway.png" alt="" />
                      </div>
                    </div>
                    <div className="dashcart-info">
                      <div className="confirem-count">
                        <h2>
                          {
                            orders.filter(
                              (order) =>
                                order.orderStatus === "Item on the Way"
                            ).length
                          }
                        </h2>
                        <p>Item on the way</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-box2">
                  <div className="cart-d1">
                    <div className="dlinfo">
                      <div className="line">
                        <img src="./images/food.png" alt="" />
                      </div>{" "}
                      <h4>Delivered</h4>
                    </div>
                    <div className="dlcount">
                      <h2>
                        {
                          orders.filter(
                            (order) => order.orderStatus === "Delivered"
                          ).length
                        }
                      </h2>
                    </div>
                  </div>
                  <div className="cart-d1">
                    <div className="dlinfo">
                      <div className="line">
                        <img src="./images/money-back.png" alt="" />
                      </div>{" "}
                      <h4>Refunded</h4>
                    </div>
                    <div className="dlcount">
                      <h2>
                        {
                          orders.filter(
                            (order) => order.orderStatus === "Refunded"
                          ).length
                        }
                      </h2>
                    </div>
                  </div>
                  <div className="cart-d1">
                    <div className="dlinfo">
                      <div className="line">
                        <img src="./images/delivery-schedule.png" alt="" />
                      </div>{" "}
                      <h4>Scheduled</h4>
                    </div>
                    <div className="dlcount">
                      <h2>
                        {
                          orders.filter(
                            (order) => order.orderStatus === "Scheduled"
                          ).length
                        }
                      </h2>
                    </div>
                  </div>
                  <div className="cart-d1">
                    <div className="dlinfo">
                      <div className="line">
                        <img src="./images/all.png" alt="" />
                      </div>{" "}
                      <h4>All</h4>
                    </div>
                    <div className="dlcount">
                      <h2>{orders.length}</h2>
                    </div>
                  </div>
                  <div className="cart-d1">
                  <Link to="/sellerDashboard">
                    <div className="dlinfo">
                     
                   
                        <h4>Seller Dashboard</h4>
                    
                    </div>
                    </Link>
                    <div className="dlcount">
                      {/* <button className="border-2px border-gray-950 bg-slate-700 mr-2 h-8 w-20" >GOTO</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-items">
            <div className="top-selling">
              <div className="sell-top">
                <div className="top-heading">
                  <div className="sell-icon">
                    <MdAlignVerticalTop />
                  </div>{" "}
                  <h2>Top Selling</h2>
                </div>

                <div className="sell-row1">
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/paneerchili.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Extra Butter</h4>
                    </div>
                  </div>
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/veg-pulao.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Veg..Pulao</h4>
                    </div>
                  </div>
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/pasta.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Pasta</h4>
                    </div>
                  </div>
                </div>
                <div className="sell-row1">
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/paneerchili.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Extra Butter</h4>
                    </div>
                  </div>
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/veg-pulao.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Veg..Pulao</h4>
                    </div>
                  </div>
                  <div className="sell-img">
                    <div className="img01">
                      <img
                        className="img-sold"
                        src="./food_img/pasta.jpg"
                        alt=""
                      />
                      <div className="sold">
                        <h4>sold:0</h4>
                      </div>
                    </div>
                    <div className="img01-info">
                      <h4>Pasta</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-rated">
              <div className="rated-head">
                <div className="rated-heading">
                  <div className="rated-icon">
                    <IoMdStar />
                  </div>{" "}
                  <h2>Top Rated Items</h2>
                </div>
                <div className="rated-row01">
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/paneerchili.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>Extra Butter</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/ice-choco.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>Extra Butter</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/veg-pulao.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>veg-Pulao</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rated-row01">
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/pasta.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>pasta</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/ice-choco.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>Ice-Cream</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="rated-img">
                    <div className="img02">
                      <img src="./food_img/burger.jpg" alt="" />
                    </div>
                    <div className="img02-info">
                      <h4>Burgur</h4>
                      <div className="reviews">
                        <span className="r-icon">
                          <IoMdStar /> 0
                        </span>
                        (0 Reviews)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;