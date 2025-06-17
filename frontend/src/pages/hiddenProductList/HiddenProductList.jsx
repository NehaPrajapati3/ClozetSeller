import React, { useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
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
import { useGetProducts } from "../files";
import { useSelector } from "react-redux";
import { selectProducts } from "../files";
import axios from "axios";
import toast from "react-hot-toast";
import { deleteProduct } from "../files";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/productSlice";
import { selectCategories, selectSubCategories } from "../../redux/selectors";
import useGetCategories from "../../hooks/useGetCategories";
import useGetSubCategories from "../../hooks/useGetSubCategories";

function HiddenProductList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("");
  const [allItem, setAllItem] = useState("");

  const handleSelectedCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setSelectedSubCategory("");
    }
  };

  const handleSelectedSubCategory = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleallItem = (event) => {
    setAllItem(event.target.value);
  };

  useGetCategories();
  const categories = useSelector(selectCategories);
  console.log("Categories to select:", categories);

  useGetSubCategories();
  const subCategories = useSelector(selectSubCategories);
  console.log("Categories to select:", subCategories);

  // const filteredSubCategories = subCategories.filter(
  //   (sub) => sub.mainCategoryId?.categoryName === selectedCategory
  // );

  const filteredSubCategories = selectedCategory
    ? subCategories.filter(
        (sub) => sub.mainCategoryId?.categoryName === selectedCategory
      )
    : [];

  const [searchQuery, setSearchQuery] = useState("");

  // const [loading, setLoading] = useState(true);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useGetProducts();
  const products = useSelector(selectProducts);

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const categoryMatch =
      selectedCategory === "" || product.category === selectedCategory;

    const subCategoryMatch =
      selectedSubCategory === "" || product.subcategory === selectedSubCategory;

    const visibility =
      typeof product.visibility === "string"
        ? JSON.parse(product.visibility || "{}")
        : product.visibility || {};

    const visibilityMatch =
      visibilityFilter === "" || visibility[visibilityFilter];

    return nameMatch && categoryMatch && subCategoryMatch && visibilityMatch;
  });

  const hiddenProducts = filteredProducts.filter((product) => {
    const visibility =
      typeof product.visibility === "string"
        ? JSON.parse(product.visibility || "{}")
        : product.visibility || {};
    return visibility.hidden === true;
  });

  const handleToggleVisibility = async (productId, field, currentValue) => {
    try {
      // Optimistically update products in Redux store
      dispatch(
        toggleVisibility({
          productId,
          field,
          value: !currentValue, // Toggle the visibility value
        })
      );

      // Send the update to the backend
      await axios.patch(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/products/toggle-visibility/${productId}`,
        {
          field,
          value: !currentValue,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Visibility updated!");
    } catch (err) {
      // If the backend update fails, revert the change in Redux state
      dispatch(
        toggleVisibility({
          productId,
          field,
          value: currentValue, // Revert to original value
        })
      );

      toast.error(
        err?.response?.data?.message || "Failed to update visibility"
      );
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/products/delete/${id}`
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      // Update product list after deletion
      dispatch(deleteProduct(id));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

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
                  <h3>{products.length}</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="search-list-box">
            <div className="main-box">
              <div className="top-box">
                <h2>Search Data</h2>
              </div>
              <div className="category-item-list">
                <div className="item-select-box">
                  <div className="select-menu">
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">All Category</InputLabel>
                      <Select
                        value={selectedCategory}
                        onChange={handleSelectedCategory}
                      >
                        <MenuItem value="">All</MenuItem>
                        {categories.map((category, index) => (
                          <MenuItem
                            key={index}
                            value={category?.categoryName || ""}
                          >
                            {category?.categoryName || "Unnamed"}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="item-select-box">
                  <div className="select-menu">
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">All Sub Category</InputLabel>
                      <Select
                        value={selectedSubCategory}
                        onChange={handleSelectedSubCategory}
                      >
                        <MenuItem value="">All</MenuItem>
                        {filteredSubCategories.map((sub, index) => (
                          <MenuItem key={index} value={sub.subCategoryName}>
                            {sub.subCategoryName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="item-select-box">
                  <div className="select-menu">
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">Filter By</InputLabel>
                      <Select
                        value={visibilityFilter}
                        onChange={(e) => setVisibilityFilter(e.target.value)}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="newArrival">New Arrival</MenuItem>
                        <MenuItem value="trending">Trending</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-table-section">
            <div className="main-list-table-section-box">
              <div className="main-list-s-top">
                <div className="s-btn">
                  <form action="">
                    <div className="s-input">
                      <input
                        type="text"
                        placeholder="Search By Reference or Name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="submit">
                        <div className="icon-s">
                          <IoSearchSharp />
                        </div>
                      </button>
                    </div>
                  </form>

                  <div className="ex-select">
                    <Link to="/addItem">
                      <Button className="e-btn">
                        <span className="e-add-btn">
                          <CgAdd />
                        </span>
                        Add New Item
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="table-section">
                {
                  <table width="100%">
                    <thead>
                      <tr className="text-sm">
                        <th className="text-sm">SI</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Recommended</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hiddenProducts.length > 0 ? (
                        hiddenProducts.map((product, index) => {
                          const visibility =
                            typeof product.visibility === "string"
                              ? JSON.parse(product.visibility || "{}")
                              : product.visibility || {};

                          return (
                            <tr key={product._id}>
                              <td>{index + 1}</td>
                              <td>
                                {product.imageUrls &&
                                product.imageUrls.length > 0 ? (
                                  <img
                                    src={product.imageUrls[0]}
                                    alt={product.name}
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

                              <td>{product.name}</td>
                              <td>{product.shortDesc}</td>
                              <td>{product.category}</td>
                              <td>${product.originalPrice}</td>
                              <td>
                                <label>
                                  <Switch
                                    checked={visibility.newArrival}
                                    onChange={() =>
                                      handleToggleVisibility(
                                        product._id,
                                        "newArrival",
                                        visibility.newArrival
                                      )
                                    }
                                  />
                                  <span className="ml-2">New Arrival</span>
                                </label>
                                <label>
                                  <Switch
                                    checked={visibility.trending}
                                    onChange={() =>
                                      handleToggleVisibility(
                                        product._id,
                                        "trending",
                                        visibility.trending
                                      )
                                    }
                                  />
                                  <span className="ml-2">Trending</span>
                                </label>
                              </td>
                              <td>
                                <Switch
                                  checked={visibility.hidden}
                                  onChange={() =>
                                    handleToggleVisibility(
                                      product._id,
                                      "hidden",
                                      visibility.hidden
                                    )
                                  }
                                />
                                <span className="ml-2">
                                  {visibility.hidden ? "Show" : "Hide"}
                                </span>
                              </td>
                              <td className="ac-box">
                                <Link to="/addItem" state={{ product }}>
                                  <Button className="hipen">
                                    <HiPencil />
                                  </Button>
                                </Link>
                                <Button
                                  onClick={(e) => handleDelete(e, product._id)}
                                >
                                  <AiOutlineDelete />
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="9">
                            <p>No hidden products available.</p>
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

export default HiddenProductList;
