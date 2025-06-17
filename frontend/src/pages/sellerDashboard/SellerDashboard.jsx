
import React, { useState, useEffect } from "react";
import "./sellerDashboard.css";
import { RiFilter3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import  useGetPlacedOrders  from "../../hooks/useGetPlacedOrders";
import { useSelector } from "react-redux";
import { selectPlacedOrders } from "../../redux/selectors";
import { AiOutlineDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { HiPencil } from "react-icons/hi2";
import {
  Button,
  Switch,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SellerDashboard() {

     useGetPlacedOrders();
     const PlacedOrders = useSelector(selectPlacedOrders);
     console.log(`PlacedOrders: ${PlacedOrders}`);

  let products;
  let filteredProducts;
  return (
    <>
      <div className="product-section">
        <div className="product-header">
          <div className="product-top">
            <div className="product-heading">
              <div className="product-list-icon">
                <RiFilter3Fill />
              </div>
              <div className="top-heading">
                <h2>Item List</h2>
                <span className="p-list">
                  <h3>{PlacedOrders.length}</h3>
                </span>
              </div>
            </div>
          </div>

          <div className="list-table-section">
            <div className="main-list-table-section-box">
              <div className="main-list-s-top">
                <div className="s-btn">
                  <form action="" onSubmit={""}>
                    <div className="s-input">
                      <input
                        type="text"
                        placeholder="Search By Reference or Name"
                        value={"search"}
                        onChange={""}
                      />
                      <button type="submit">
                        <div className="icon-s">
                          <IoSearchSharp />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="table-section">
                {
                  <table width="100%">
                    <thead>
                      <tr className="text-sm">
                        <th className="text-sm">SI</th>
                        <th>Order ID</th>
                        <th>Product Name</th>
                        <th>Net Earnings</th>
                        <th>Commission Slab</th>
                        <th>Commission Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PlacedOrders?.length > 0 ? (
                        PlacedOrders.map((order, index) => (
                          <tr key={order._id} align="center">
                            <td>{index + 1}</td>
                            <td>{order._id}</td>
                            <td>{order.productDetails?.name}</td>
                            <td>₹{order.netEarnings.toFixed(2)}</td>
                            <td>{order.commissionSlab || "N/A"}</td>
                            <td>{order.commissionPercent || "N/A"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">
                            <p>No orders found.</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerDashboard
