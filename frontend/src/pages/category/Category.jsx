import React, { useState, useEffect } from "react";
import "./category.css";
import { CgAdd } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";
import { Switch, Button, FormControlLabel } from "@mui/material";
import { selectCategories, selectCategoryToEdit } from "../../redux/selectors";
import {
  setCategoryToEdit,
  clearCategoryToEdit,
  deleteCategory,
} from "../../redux/categorySlice";
import axios from "axios";
import toast from "react-hot-toast";
import useGetCategories from "../../hooks/useGetCategories";

const Category = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleEdit = (category) => {
    dispatch(setCategoryToEdit(category));
  };

  const categoryToEdit = useSelector(selectCategoryToEdit);

  const [newCategory, setNewCategory] = useState({
    categoryId: categoryToEdit?.categoryId || "",
    categoryName: categoryToEdit?.categoryName || "",
    categoryStatus: categoryToEdit?.categoryStatus || false,
    featured: categoryToEdit?.featured || false,
  });

  useEffect(() => {
    if (categoryToEdit) {
      setNewCategory({
        ...newCategory,
        categoryId: categoryToEdit?.categoryId || "",
        categoryName: categoryToEdit?.categoryName || "",
        categoryStatus: categoryToEdit?.categoryStatus || false,
        featured: categoryToEdit?.featured || false,
      });
    }
  }, [categoryToEdit]);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log(`newCategory is: ${newCategory}`);
      let res;
      if (categoryToEdit?._id) {
        // Update Coupon
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/category/edit/${
            categoryToEdit._id
          }`,
          newCategory,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } else {
        // Add new Coupon
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/category/add`,
          newCategory,
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
    setNewCategory({
      categoryId: "",
      categoryName: "",
      categoryStatus: false,
      featured: false,
    });

    dispatch(clearCategoryToEdit());
  };

  const handleToggleStatus = async (id) => {
    console.log("category id:", id);
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/v1/category/toggle-status/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success("Category status updated!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update status.");
      console.log(error);
    }
  };

  const handleToggleFeatured = async (id) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/v1/category/toggle-featured/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success("Category featured status updated!");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update featured."
      );
      console.log(error);
    }
  };

  // const { refetchCategories } = useGetCategories();
  // const categories = useSelector(selectCategories);
  // useEffect(() => {
  //   // Re-fetch categories when a category is added/updated
  //   refetchCategories();
  // }, [handleAddOrUpdate]);
  useGetCategories();
  const categories = useSelector(selectCategories);

  console.log("Categories:", categories);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/category/delete/${id}`
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      // Update category list after deletion
      dispatch(deleteCategory(id));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const handleReset = async () => {
    setNewCategory({
      categoryId: "",
      categoryName: "",
      categoryStatus: false,
      featured: false,
    });
  };

  return (
    <>
      <div className="coupon-section">
        <div className="coupon-header">
          <div className="coupon-top">
            <div className="coupon-heading">
              <div className="c-add-icon">
                <CgAdd />
              </div>{" "}
              <h2>Add New Category</h2>
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

                <div className="title-box2">
                  <div className="wrap-part">
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Category Name</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="text"
                          placeholder=""
                          value={newCategory.categoryName}
                          onChange={(e) =>
                            setNewCategory({
                              ...newCategory,
                              categoryName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Category Status</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newCategory.categoryStatus}
                                onChange={(e) =>
                                  setNewCategory({
                                    ...newCategory,
                                    categoryStatus: e.target.checked,
                                  })
                                }
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Featured</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newCategory.featured}
                                onChange={(e) =>
                                  setNewCategory({
                                    ...newCategory,
                                    featured: e.target.checked,
                                  })
                                }
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-box4">
                  <div className="title-btn-box">
                    <Button className="rst-btn" onClick={handleReset}>
                      Reset
                    </Button>
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
                  <h2>Category List</h2>
                  <span>{categories.length}</span>
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
                      <th>Category ID</th>
                      <th>Category Name</th>
                      <th>Status</th>
                      <th>Featured</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {categories?.length > 0 ? (
                    categories
                      .filter((category) =>
                        category.categoryName
                          ?.toLowerCase()
                          .includes(searchQuery.trim().toLowerCase())
                      )
                      .map((category, index) => (
                        <tr align="center" key={category._id || index}>
                          <td>{index + 1}</td>
                          <td>{category.categoryId}</td>
                          <td>{category.categoryName}</td>
                          <td>
                            <label>
                              <Switch
                                checked={category.categoryStatus}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleToggleStatus(category._id);
                                }}
                              />
                            </label>
                          </td>
                          <td>
                            <label>
                              <Switch
                                checked={category.featured}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleToggleFeatured(category._id);
                                }}
                              />
                            </label>
                          </td>

                          <td className="ac-box">
                            <Button
                              className="hipen"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEdit(category);
                              }}
                            >
                              <HiPencil />
                            </Button>

                            <Button
                              onClick={(e) => handleDelete(e, category._id)}
                            >
                              <AiOutlineDelete />
                            </Button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="12" align="center">
                        No categories found.
                      </td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
