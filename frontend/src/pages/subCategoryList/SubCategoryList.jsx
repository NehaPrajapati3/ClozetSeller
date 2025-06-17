import React, { useState, useEffect } from "react";
import "./subCategoryList.css";
import { CgAdd } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";
import { Switch, Button } from "@mui/material";
import {
  selectSubCategories,
  selectSubCategoryToEdit,
} from "../../redux/selectors";
import { selectCategories, selectCategoryToEdit } from "../../redux/selectors";
import {
  setSubCategoryToEdit,
  clearSubCategoryToEdit,
  deleteSubCategory,
} from "../../redux/subCategorySlice";
import axios from "axios";
import toast from "react-hot-toast";
import useGetSubCategories from "../../hooks/useGetSubCategories";
import useGetCategories from "../../hooks/useGetCategories";

function SubCategoryList() {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (subCategory) => {
    dispatch(setSubCategoryToEdit(subCategory));
    navigate("/subCategory");
  };
  useGetSubCategories();
  const subCategories = useSelector(selectSubCategories);
  console.log("subCategories:", subCategories);
  useGetCategories();
  const categories = useSelector(selectCategories);
  console.log("Categories to select:", categories);

  const handleToggleSubCategoryStatus = async (subCategoryId) => {
    try {
      const res = await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/subCategory/toggle-status/${subCategoryId}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success("SubCategory status updated");
        // Optionally refresh data
      }
    } catch (error) {
      toast.error("Failed to toggle status");
      console.log(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/subCategory/delete/${id}`
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      // Update category list after deletion
      dispatch(deleteSubCategory(id));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="coupon-section">
      <div className="coupon-header">
        <div className="coupon-table">
          <div className="c-table-header">
            <div className="c-table-top">
              <div className="c-table-heading">
                <h2>Sub Category List</h2>
                <span>{subCategories.length}</span>
              </div>
              <div className="search-title-code">
                <div className="s-input">
                  <input
                    type="text"
                    placeholder="Search By Refrence or Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                    <th>Main Category</th>
                    <th>Sub Category ID</th>
                    <th>Sub Category Image</th>
                    <th>Size Chart Image</th>
                    <th>Sub Category Name</th>
                    <th>Status</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subCategories?.length > 0 ? (
                    subCategories
                      .filter((subCategory) =>
                        subCategory.subCategoryName
                          ?.toLowerCase()
                          .includes(searchQuery.trim().toLowerCase())
                      )
                      .map((subCategory, index) => (
                        <tr align="center" key={subCategory._id || index}>
                          <td>{index + 1}</td>
                          <td>{subCategory.mainCategoryId?.categoryName}</td>
                          <td>{subCategory.subCategoryId}</td>
                          <td>
                            {subCategory.subCategoryImageUrl ? (
                              <img
                                src={subCategory.subCategoryImageUrl}
                                alt={subCategory.subCategoryName}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "3px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <span className="no-image">No Image</span>
                            )}
                          </td>
                          <td>
                            {subCategory.subCategorySizeChartUrl ? (
                              <img
                                src={subCategory.subCategorySizeChartUrl}
                                alt={subCategory.subCategoryName}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "3px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <span className="no-image">No Image</span>
                            )}
                          </td>
                          <td>{subCategory.subCategoryName}</td>
                          <td>
                            <label>
                              <Switch
                                checked={subCategory.subCategoryStatus}
                                onChange={() =>
                                  handleToggleSubCategoryStatus(subCategory._id)
                                }
                              />
                            </label>
                          </td>

                          <td className="ac-box">
                            <Button
                              className="hipen"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEdit(subCategory);
                              }}
                            >
                              <HiPencil />
                            </Button>

                            <Button
                              onClick={(e) => handleDelete(e, subCategory._id)}
                            >
                              <AiOutlineDelete />
                            </Button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="12" align="center">
                        No subcategories found.
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
  );
}

export default SubCategoryList;
