import React, { useState, useEffect } from "react";
import "./coupons.css";
import { CgAdd } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { LuEye } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";

import useGetCoupons from "../../hooks/useGetCoupons";
import { useSelector } from "react-redux";
import { selectCoupons, selectCouponToEdit } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setCouponToEdit, clearCouponToEdit } from "../../redux/couponSlice";

const Coupons = () => {
  const dispatch = useDispatch();

  const handleEdit = (coupon) => {
    dispatch(setCouponToEdit(coupon));
  };

  const couponToEdit = useSelector(selectCouponToEdit);

  const [newCoupon, setNewCoupon] = useState({
    title: couponToEdit?.title || "",
    couponType: couponToEdit?.couponType || "",
    code: couponToEdit?.code || "",
    limitForSameUser: couponToEdit?.limitForSameUser || "",
    startDate: couponToEdit?.startDate || "",
    expireDate: couponToEdit?.expireDate || "",
    discountType: couponToEdit?.discountType || "",
    discount: couponToEdit?.discount || "",
    maxDiscount: couponToEdit?.maxDiscount || "",
    minPurchase: couponToEdit?.minPurchase || "",
  });

  useEffect(() => {
    if (couponToEdit) {
      setNewCoupon({
        ...newCoupon,
        title: couponToEdit?.title || "",
        couponType: couponToEdit?.couponType || "",
        code: couponToEdit?.code || "",
        limitForSameUser: couponToEdit?.limitForSameUser || "",
        startDate: couponToEdit?.startDate || "",
        expireDate: couponToEdit?.expireDate || "",
        discountType: couponToEdit?.discountType || "",
        discount: couponToEdit?.discount || "",
        maxDiscount: couponToEdit?.maxDiscount || "",
        minPurchase: couponToEdit?.minPurchase || "",
      });
    }
  }, [couponToEdit]);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log(`newCoupon is: ${newCoupon}`);
      let res;
      if (couponToEdit?._id) {
        // Update Coupon
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/coupon/edit/${
            couponToEdit._id
          }`,
          newCoupon,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } else {
        // Add new Coupon
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/coupon/add`,
          newCoupon,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      }

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      console.log(error);
    }

    // Reset form after submission
    setNewCoupon({
      title: "",
      couponType: "",
      code: "",
      limitForSameUser: "",
      startDate: "",
      expireDate: "",
      discountType: "",
      discount: "",
      maxDiscount: "",
      minPurchase: "",
    });

    dispatch(clearCouponToEdit());
  };

  const { refetch } = useGetCoupons();
  const coupons = useSelector(selectCoupons);
  useEffect(() => {
    // Re-fetch coupons when a coupon is added/updated
    refetch();
  }, [handleAddOrUpdate]);

  console.log("Coupons:", coupons);

  return (
    <>
      <div className="coupon-section">
        <div className="coupon-header">
          <div className="coupon-top">
            <div className="coupon-heading">
              <div className="c-add-icon">
                <CgAdd />
              </div>{" "}
              <h2>Add New Coupon</h2>
            </div>
          </div>
          <div className="coupon-form-section">
            <form
              action=""
              encType="multipart/form-data"
              onSubmit={(e) => handleAddOrUpdate(e)}
            >
              <div className="coupon-form">
                <div className="default-top">
                  <div className="default-heading">
                    <div className="d-1">
                      <h3>Default</h3>
                    </div>
                    <div className="e-1">
                      <h3>English</h3>
                    </div>
                  </div>
                </div>
                <div className="title-box">
                  <div className="title-heading">
                    <h3>Title (Default)</h3>
                  </div>
                  <div className="title-input">
                    <input
                      type="text"
                      placeholder="New Coupon"
                      value={newCoupon.title}
                      onChange={(e) =>
                        setNewCoupon({ ...newCoupon, title: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="title-box2">
                  <div className="wrap-part">
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Coupon type</h3>
                      </div>
                      <div className="title-c-select">
                        <div className="select-menu">
                          <FormControl className="f-bg" fullWidth>
                            <InputLabel className="s-bg">
                              All Category
                            </InputLabel>
                            <Select
                              value={newCoupon.couponType}
                              onChange={(e) =>
                                setNewCoupon({
                                  ...newCoupon,
                                  couponType: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="First order discount">
                                First order discount
                              </MenuItem>
                              <MenuItem value="Buy one get one">
                                Buy one get one
                              </MenuItem>
                              <MenuItem value="Free Shipping">
                                Free Shipping
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Code</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="text"
                          placeholder="ch93jkad"
                          value={newCoupon.code}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              code: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Limit for same user</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="number"
                          placeholder="Ex : 10"
                          value={newCoupon.limitForSameUser}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              limitForSameUser: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Start date</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="date"
                          placeholder="Ex : 10"
                          value={newCoupon.startDate}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              startDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Expire date</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="date"
                          placeholder="Ex : 10"
                          value={newCoupon.expireDate}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              expireDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Discount type</h3>
                      </div>

                      <div className="title-c-select">
                        <div className="select-menu">
                          <FormControl className="f-bg" fullWidth>
                            <InputLabel className="s-bg">Amount ($)</InputLabel>
                            <Select
                              value={newCoupon.discountType}
                              onChange={(e) =>
                                setNewCoupon({
                                  ...newCoupon,
                                  discountType: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="percentage">Percentage</MenuItem>
                              <MenuItem value="fixed amount">
                                Fixed amount
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>

                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Discount</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="number"
                          placeholder="ch93jkad"
                          value={newCoupon.discount}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              discount: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Max discount</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="number"
                          placeholder="0"
                          value={newCoupon.maxDiscount}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              maxDiscount: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Min purchase</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="number"
                          placeholder="0"
                          value={newCoupon.minPurchase}
                          onChange={(e) =>
                            setNewCoupon({
                              ...newCoupon,
                              minPurchase: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-box4">
                  <div className="title-btn-box">
                    <Button className="rst-btn">Reset</Button>
                    <Button className="subt-btn" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="coupon-table">
            <div className="c-table-header">
              <div className="c-table-top">
                <div className="c-table-heading">
                  <h2>Coupon List</h2>
                  <span>{coupons.length}</span>
                </div>
                <div className="search-title-code">
                  <div className="s-input">
                    <input
                      type="text"
                      placeholder="Search By Refrance or Name"
                    />
                    <div className="icon-s">
                      <IoSearchSharp />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-coupon-box">
                <table width="100%">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Title</th>
                      <th>Coupon Type</th>
                      <th>Code</th>
                      <th>Limit for same user</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th>Discount Type</th>
                      <th>Discount</th>
                      <th>Max Discount</th>
                      <th>Min purchase</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons?.length > 0 ? (
                      coupons.map((coupon, index) => (
                        <tr align="center" key={coupon._id || index}>
                          <td>{index + 1}</td>
                          <td>{coupon.title}</td>
                          <td>{coupon.couponType}</td>
                          <td>{coupon.code}</td>
                          <td>{coupon.limitForSameUser}</td>
                          <td>
                            {new Date(coupon.startDate).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(coupon.expireDate).toLocaleDateString()}
                          </td>
                          <td>{coupon.discountType}</td>
                          <td>
                            {coupon.discount}
                            {coupon.discountType === "percentage" ? "%" : ""}
                          </td>
                          <td>{coupon.maxDiscount}</td>
                          <td>{coupon.minPurchase}</td>
                          <td className="ac-box">
                            <Button
                              className="hipen"
                              onClick={() => handleEdit(coupon)}
                            >
                              <LuEye />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="12" align="center">
                          No coupons found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Coupons;
