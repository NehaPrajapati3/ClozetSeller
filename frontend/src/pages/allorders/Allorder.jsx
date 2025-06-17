import React, { useState } from "react";
import "./allorder.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { Button, Switch } from "@mui/material";
import Footer from "../footer/footer";
import { useGetOrders } from "../files";
import { useSelector } from "react-redux";
import { selectOrders } from "../files";
import { useDispatch } from "react-redux";
import { setOrders } from "../../redux/orderSlice";
import toast from "react-hot-toast";
import axios from "axios";

const AllOrder = () => {
  useGetOrders();
  const orders = useSelector(selectOrders);
  console.log(`Orders: ${orders}`);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [orderStatuses, setOrderStatuses] = useState(
    orders.reduce(
      (acc, order) => ({ ...acc, [order._id]: order.orderStatus }),
      {}
    )
  );

  const handleStatusChange = async (orderId, newStatus) => {
    console.log(`OrderId: ${orderId}`);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/order/edit/${orderId}`,
        { orderStatus: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setOrderStatuses((prev) => ({ ...prev, [orderId]: newStatus }));
        setOpenDropdown(null); // Close dropdown after selection
        toast.success(`Order ${orderId} status changed to: ${newStatus}`);
      } else {
        toast.error("Failed to update order status.");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Error updating order status.");
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const searchOrder = orders?.find((order) =>
      order.customerInformation.toLowerCase().includes(search.toLowerCase())
    );
    if (searchOrder) {
      dispatch(setOrders([searchOrder]));
    } else {
      toast.error("Order not found");
    }
    setSearch("");
  };

  return (
    <>
      <div className="order-section">
        <div className="order-header">
          <div className="order-top">
            <div className="order-heading">
              <div className="allorder-img">
                <img src="./images/order-delivery.png" alt="" />
              </div>
              <div className="top-heading">
                <h2>All Orders</h2>
                <span className="o-list">
                  <h3>{orders.length}</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="order-table">
            <div className="order-table-section">
              <div className="tb-or-top">
                <div className="s-btn">
                  <form action="" onSubmit={searchSubmitHandler}>
                    <div className="s-input">
                      <input
                        type="text"
                        placeholder="Search By Reference or Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button type="submit">
                        <div className="icon-s">
                          <IoSearchSharp />
                        </div>
                      </button>
                    </div>
                  </form>
                  <div className="ex-select">
                    <Button className="e-btn">
                      <span>
                        <MdFileDownload />
                      </span>
                      Export
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="main-or-table">
                <table width="100%">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Order Id</th>
                      <th>Product Name</th>
                      <th>Order Date</th>
                      <th>Customer Information</th>
                      <th>Total Amount</th>
                      <th>Order Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {orders.length > 0 ? (
                      orders.map((order, index) => (
                        <tr key={order._id}>
                          <td>{index + 1}</td>
                          <td>{order.orderNumber}</td>
                          <td>
                            {order.products?.map((item, index) => (
                              <div key={index}>{item.productId?.name}</div>
                            ))}
                          </td>
                          <td>{order.createdAt}</td>
                          <td>{order.customerId?.firstName}</td>
                          <td>{order.totalAmount}</td>
                          <td>{orderStatuses[order._id]}</td>
                          <td
                            className="ac-box"
                            style={{ position: "relative" }}
                          >
                            <Button
                              className="hipen"
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === order._id ? null : order._id
                                )
                              }
                            >
                              <LuEye />
                            </Button>
                            {openDropdown === order._id && (
                              <select
                                value={orderStatuses[order._id]}
                                onChange={(e) =>
                                  handleStatusChange(order._id, e.target.value)
                                }
                                style={{
                                  position: "absolute",
                                  top: "100%",
                                  left: 0,
                                  background: "#fff",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  padding: "5px",
                                  marginRight: "10px",
                                }}
                              >
                                <option value="Confirmed">Confirmed</option>
                                <option value="Ready for Delivery">
                                  Ready for Delivery
                                </option>
                                <option value="Item on the Way">
                                  Item on the Way
                                </option>
                                <option value="Delivered">Delivered</option>
                                <option value="Refunded">Refunded</option>
                                <option value="Scheduled">Scheduled</option>
                              </select>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">
                          <p>No products available.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AllOrder;
