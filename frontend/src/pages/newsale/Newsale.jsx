import React, { useState, useEffect } from "react";
import "./newsale.css";
import { AiFillProduct } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetOrders } from "../files";
import { useSelector } from "react-redux";
import { selectOrders } from "../files";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newsale = () => {
  const [store, setStore] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [customer, setCustomer] = React.useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleStore = (event) => {
    setStore(event.target.value);
  };

  const handleCategories = (event) => {
    setCategories(event.target.value);
  };

  const handleCustomer = (event) => {
    setCustomer(event.target.value);
  };

  useGetOrders();
  const orders = useSelector(selectOrders);

  const addToCart = (order) => {
    setCart([order]);
  };
  // Remove item from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Update total price calculations
  const COMMISSION_SLABS = {
    low: 5, // X% for orders below ₹700
    mid: 10, // Y% for ₹700 – ₹2,200
    high: 15, // Z% for orders above ₹2,200
  };

  const calculateTotal = () => {
    let subtotal = 0;
    let totalDiscount = 0;
    let discountType = "";
    let discountValue = "";

    console.log(`Cart: ${JSON.stringify(cart, null, 2)}`);

    cart.forEach((order, orderIndex) => {
      order.products.forEach((item, productIndex) => {
        const price = item.productId?.originalPrice || 0;
        const discount = item.productId?.discountValue || 0;
        const itemDiscountType = item.productId?.discountType;
        const quantity = item.quantity || 1;

        let discountedPrice = price;
        let itemDiscount = 0;

        if (itemDiscountType === "percentage") {
          itemDiscount = (price * discount) / 100;
          discountedPrice = price - itemDiscount;
          discountType = "percentage";
          discountValue = `${discount}%`;
        } else if (itemDiscountType === "amount") {
          itemDiscount = discount;
          discountedPrice = Math.max(0, price - itemDiscount);
          discountType = "amount";
          discountValue = `₹${discount.toFixed(2)}`;
        }

        console.log(
          `Order ${orderIndex + 1}, Product ${
            productIndex + 1
          }: Original Price ₹${price}, Discounted Price ₹${discountedPrice}, Quantity: ${quantity}`
        );

        subtotal += discountedPrice * quantity;
        totalDiscount += itemDiscount * quantity;
      });
    });

    // Commission slab logic
    let commissionRate = 0;
    let commissionSlab = "";

    if (subtotal == 0) {
      commissionRate = "";
      commissionSlab = "";
    } else if (subtotal > 0 && subtotal < 700) {
      commissionRate = COMMISSION_SLABS.low;
      commissionSlab = "Below ₹700";
    } else if (subtotal >= 700 && subtotal <= 2200) {
      commissionRate = COMMISSION_SLABS.mid;
      commissionSlab = "Between ₹700 - ₹2200";
    } else {
      commissionRate = COMMISSION_SLABS.high;
      commissionSlab = "Above ₹2200";
    }

    const commissionAmount = (subtotal * commissionRate) / 100;
    const deliveryFee = cart.length > 0 ? 50 : 0;
    const total = subtotal + deliveryFee;
    const netEarnings = total - commissionAmount;

    return {
      subtotal: subtotal || 0,
      discount: totalDiscount || 0,
      discountValue: discountValue || "0",
      deliveryFee: deliveryFee || 0,
      total: total || 0,
      netEarnings: netEarnings || 0,
      commissionSlab: commissionSlab || "",
      commissionRate: `${commissionRate}%`,
      commissionAmount: commissionAmount.toFixed(2),
    };
  };

  const handlePlaceOrder = async () => {
    console.log(`Inside cart is ${cart[0]}`);
    console.log(`Inside stringified cart is ${JSON.stringify(cart[0])}`);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/seller-dashboard/add`,
        cart[0]
      );

      if (response.status === 201) {
        toast.success("Order placed in seller dashboard successfully!");
        setCart([]); // Clear the cart
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong");
    }
  };

  const totals = calculateTotal();

  return (
    <>
      <div className="newsale-section">
        <div className="newsale">
          {/* Product Section */}
          <div className="product-left">
            <div className="product-heading">
              <AiFillProduct /> <h3>Product Section</h3>
            </div>

            {/* Search Bar */}
            <div className="search-tab">
              <div className="search-input">
                <input type="text" placeholder="Search..." />
              </div>

              <div className="search-icon">
                <IoSearchSharp />
              </div>
            </div>

            {/* Product List */}

            <div className="see-products">
              <table width="100%">
                <thead>
                  <tr>
                    <th>SI</th>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Order Date</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 ? (
                    orders
                      .filter((order) => order.orderStatus === "Confirmed")
                      .map((order, index) => (
                        <tr align="center" key={order._id}>
                          <td>{index + 1}</td>
                          <td>{order._id}</td>
                          <td>
                            {order.products
                              ?.map((item) => item.productId?.name)
                              .join(", ") || "N/A"}
                          </td>
                          <td>
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                          <td>{order.customerId?.firstName}</td>
                          <td>₹{order.totalAmount.toFixed(2) || "0.00"}</td>
                          <td>
                            <Button onClick={() => addToCart(order)}>
                              Add to Cart
                            </Button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="7">No products available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Billing Section */}
          <div className="billing-right">
            <div className="billing-heading">
              <LiaMoneyBillWaveSolid /> <h3>Billing Section</h3>
            </div>

            <div className="billing-heading see-products">
              <table width="100%">
                <thead>
                  <tr className="gap-3">
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="4" align="center">
                        No item selected
                      </td>
                    </tr>
                  ) : (
                    cart.map((item, index) => (
                      <tr align="center" key={index}>
                        <td>
                          {item.products
                            ?.map((product) => product.productId?.name)
                            .join(", ") || "N/A"}
                        </td>
                        <td>
                          {item.products
                            ?.map((product) => product.quantity)
                            .join(", ") || "N/A"}
                        </td>
                        <td>
                          ₹
                          {item.products
                            ?.map((product) => product.productId?.sellingPrice)
                            .join(", ") || "N/A"}
                        </td>
                        <td>
                          <button
                            className="table-btn"
                            onClick={() => removeFromCart(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="delivery-info">
              <div className="home-deli">
                <FaUser />{" "}
                <h4>
                  Delivery Information <span>(Home Delivery)</span>
                </h4>
              </div>
              <div className="pen">
                <HiPencil />
              </div>
            </div>

            {/* Cart Table */}
            <div className="table-bill">
              <table
                className="cart-table"
                cellPadding={10}
                border={1}
                rules="all"
              >
                <thead className="thead-border"></thead>
                <tbody align="center">
                  <tr>
                    <td colSpan={2}>
                      Discount <span>({totals?.discountValue})</span>:
                    </td>
                    <td colSpan={2}>
                      -₹{totals?.discount?.toFixed(2) || "0.00"}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2}>Subtotal:</td>
                    <td colSpan={2}>
                      ₹{totals?.subtotal?.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Delivery Fee:</td>
                    <td colSpan={2}>
                      ₹{totals?.deliveryFee.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Total:</strong>
                    </td>
                    <td colSpan={2}>
                      <strong>₹{totals?.total.toFixed(2) || "0.00"}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Commision Slab:</td>
                    <td colSpan={2}>{totals?.commissionSlab || "N/A"}</td>
                  </tr>
                  {/* <tr>
                    <td colSpan={2}>Commision Rate:</td>
                    <td colSpan={2}>{totals?.commissionRate || "0.00"}</td>
                  </tr> */}
                  {/* <tr>
                    <td colSpan={2}>Commision Amount:</td>
                    <td colSpan={2}>₹{totals?.commissionAmount || "0.00"}</td>
                  </tr> */}
                  <tr>
                    <td colSpan={2}>
                      <strong>Net Earnings:</strong>
                    </td>
                    <td colSpan={2}>
                      <strong>
                        ₹{totals?.netEarnings.toFixed(2) || "0.00"}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="place-cart">
              <Button className="pbtn" onClick={handlePlaceOrder}>
                Place Order
              </Button>
              <Button className="cbtn" onClick={() => setCart([])}>
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsale;
