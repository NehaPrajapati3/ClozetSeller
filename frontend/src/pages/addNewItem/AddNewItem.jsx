import React, { useState, useEffect } from "react";
import "./addNewItem.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  Switch,
  FormControlLabel,
  TextField,
  Chip,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSubCategories,
  selectSubCategoryToEdit,
} from "../../redux/selectors";
import { selectCategories, selectCategoryToEdit } from "../../redux/selectors";
import useGetSubCategories from "../../hooks/useGetSubCategories";
import useGetCategories from "../../hooks/useGetCategories";
import {
  // calculatePricing,
  // calculateDiscount,
  usePricingSync,
} from "../../hooks/usePricingSync";

function AddNewItem() {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeQuantity, setSizeQuantity] = useState("");

  useGetCategories();
  const categories = useSelector(selectCategories);
  console.log("Categories to select:", categories);

  useGetSubCategories();
  const subCategories = useSelector(selectSubCategories);
  console.log("subCategories:", subCategories);

  const location = useLocation();
  const productToEdit = location.state?.product || null;

  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [sku, setSku] = useState("");
  //const sizes = ["S", "M", "L", "XL"];

  let productId;
  const [newProduct, setNewProduct] = useState({
    name: productToEdit?.name || "",
    category: productToEdit?.category || "",
    subcategory: productToEdit?.subcategory || "",
    shortDesc: productToEdit?.shortDesc || "",
    detailedDesc: productToEdit?.detailedDesc || "",
    tags: productToEdit?.tags || [],
    brand: productToEdit?.brand || "",
    sellingPrice: productToEdit?.sellingPrice || "",
    originalPrice: productToEdit?.originalPrice || "",
    discountType: productToEdit?.discountType || "",
    discountValue: productToEdit?.discountValue || "",
    taxIncluded: productToEdit?.taxIncluded || false,
    taxValue: productToEdit?.taxValue || "",

    stock: productToEdit?.stock || {},
    stockStatus: productToEdit?.stockStatus || false,
    images: productToEdit?.images || [],
    video: productToEdit?.video || "",
    returnPolicy: productToEdit?.returnPolicy || false,
    exchangePolicy: productToEdit?.exchangePolicy || false,
    visibility: {
      newArrival: productToEdit?.visibility?.newArrival || false,
      trending: productToEdit?.visibility?.trending || false,
      hidden: productToEdit?.visibility?.hidden || false,
    },
    seoKeywords: productToEdit?.seoKeywords || "",
    buyerNotes: productToEdit?.buyerNotes || "",
    status: productToEdit?.status || "draft",
  });

  const filteredSubCategories = subCategories.filter(
    (sub) => sub.mainCategoryId?.categoryName === newProduct.category
  );

  const selectedSubCategory = filteredSubCategories.find(
    (sub) => sub.subCategoryName === newProduct.subcategory
  );

  const sizeChart = selectedSubCategory?.subCategorySizeChart || [];

  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files).slice(0, 6); // limit to 6 if needed
    setImageFiles(files); // Only update imageFiles
  };

  useEffect(() => {
    if (productToEdit) {
      setNewProduct({
        ...newProduct,
        name: productToEdit?.name || "",
        category: productToEdit?.category || "",
        subcategory: productToEdit?.subcategory || "",
        shortDesc: productToEdit?.shortDesc || "",
        detailedDesc: productToEdit?.detailedDesc || "",
        tags: productToEdit?.tags || [],
        brand: productToEdit?.brand || "",
        sellingPrice: productToEdit?.sellingPrice || "",
        originalPrice: productToEdit?.originalPrice || "",
        discountType: productToEdit?.discountType || "",
        discountValue: productToEdit?.discountValue || "",
        taxValue: productToEdit?.taxValue || "",
        taxIncluded: productToEdit?.taxIncluded || false,
        stock: productToEdit?.stock || {},
        stockStatus: productToEdit?.stockStatus || false,
        images: productToEdit?.images || [],
        video: productToEdit?.video || "",
        returnPolicy: productToEdit?.returnPolicy || false,
        exchangePolicy: productToEdit?.exchangePolicy || false,
        visibility: {
          newArrival: productToEdit?.visibility?.newArrival || false,
          trending: productToEdit?.visibility?.trending || false,
          hidden: productToEdit?.visibility?.hidden || false,
        },
        seoKeywords: productToEdit?.seoKeywords || "",
        buyerNotes: productToEdit?.buyerNotes || "",
        status: productToEdit?.status || "draft",
      });
    }
  }, [productToEdit]);

  usePricingSync(newProduct, setNewProduct);

  const handleAutoGenerateSKU = (e) => {
    e.preventDefault();

    // Ensure that category and subcategory are available
    if (!newProduct.name || !newProduct.category || !newProduct.subcategory) {
      toast.error(
        "Please fill item name, category and subcategory to generate SKU."
      );
      return;
    }

    // Generate SKU using only category and subcategory
    const newSku = `${newProduct.name
      .slice(0, 3)
      .toUpperCase()}-${newProduct.category
      .slice(0, 3)
      .toUpperCase()}-${newProduct.subcategory.slice(0, 3).toUpperCase()}`;
    setSku(newSku); // Update the SKU
    toast.success("SKU auto-generated.");
  };

  const tagsString =
    typeof newProduct.tags === "string"
      ? newProduct.tags.split(" ").join(",")
      : newProduct.tags.join(",");

  const [isUploading, setIsUploading] = useState(false);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    console.log("inside handleAddOrUpdate");
    try {
      setIsUploading(true); // Show loading overlay
      console.log("inside try handleAddOrUpdate");

      let imageUrls = newProduct.images || [];
      let videoUrl = newProduct.video || "";

      // ✅ Upload new media ONLY if new files are selected
      if (imageFiles.length > 0 || videoFile) {
        const mediaForm = new FormData();
        imageFiles.forEach((file) => {
          if (file) mediaForm.append("images", file);
        });
        if (videoFile) {
          mediaForm.append("video", videoFile);
        }

        if (productToEdit?._id) {
          mediaForm.append(
            "oldImageUrls",
            JSON.stringify(productToEdit.images || [])
          );
          mediaForm.append("oldVideoUrl", productToEdit.video || "");
        }

        const uploadRes = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/products/upload-media`,
          mediaForm,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );

        imageUrls = uploadRes.data.imageUrls || imageUrls;
        videoUrl = uploadRes.data.videoUrl || videoUrl;
      }
      //  console.log("imageUrls in add", imageUrls);
      //  console.log("videoUrl in add", videoUrl);
      // 🧾 Build payload
      const productPayload = {
        ...newProduct,
        tags: tagsString,
        stock: JSON.stringify(newProduct.stock),
        visibility: JSON.stringify(newProduct.visibility),
        imageUrls,
        videoUrl,
        sku, // if you're using external sku state
      };

      let res;
      //console.log("after productPayload handleAddOrUpdate");

      // 🛠️ Update or Add
      if (productToEdit?._id) {
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/products/edit/${
            productToEdit._id
          }`,
          productPayload,
          {
            withCredentials: true,
          }
        );
      } else {
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/products/add`,
          productPayload,
          {
            withCredentials: true,
          }
        );
      }

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      console.error(error);
    } finally {
      setIsUploading(false); // Hide loading overlay

      // Reset form
      setNewProduct({
        name: "",
        category: "",
        subcategory: "",
        shortDesc: "",
        detailedDesc: "",
        tags: [],
        brand: "",
        sku: "",
        sellingPrice: "",
        originalPrice: "",
        discountType: "",
        discountValue: "",
        taxIncluded: false,
        taxValue: "",
        stock: {},
        stockStatus: false,
        images: [],
        video: "",
        returnPolicy: false,
        exchangePolicy: false,
        visibility: {
          newArrival: false,
          trending: false,
          hidden: false,
        },
        seoKeywords: "",
        buyerNotes: "",
        status: "draft",
      });

      setImageFiles([]);
      setVideoFile(null);
    }
  };

  return (
    <>
      <div className="add-section">
        <div className="add-header">
          <div className="add-top">
            <div className="add-heading">
              <div className="add-img">
                <img src="./images/order-delivery.png" alt="" />
              </div>
              <div className="top-heading">
                <h2>Add New Item</h2>
              </div>
            </div>
          </div>
          <form
            className="main-add-form"
            encType="multipart/form-data"
            onSubmit={(e) => {
              handleAddOrUpdate(productToEdit?._id);
            }}
          >
            <div className="add-form-section">
              <div className="add-form-left-section">
                <div className="add-form">
                  <div className="default-top">
                    <div className="default-heading-add">
                      <div className="dadd-1">
                        <h3>Default</h3>
                      </div>
                      <div className="eadd-1">
                        <h3>English</h3>
                      </div>
                    </div>
                  </div>
                  <div className="name-box">
                    <div className="name-heading">
                      <h3>Name (Default)*</h3>
                    </div>
                    <div className="name-input">
                      <input
                        type="text"
                        placeholder="New Item Name"
                        value={newProduct.name}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="description-box">
                    <div className="description-heading">
                      <h3>Short description (Default)*</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.shortDesc}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            shortDesc: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="description-box">
                    <div className="description-heading">
                      <h3>Detailed description (Default)</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.detailedDesc}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            detailedDesc: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-form-right-section">
                <div className="add-form gap-7">
                  <div className="img-box">
                    <div className="img-heading">
                      <h3>
                        Item Image <span>*(Ratio 1:1) Max upto 6 Images</span>
                      </h3>
                    </div>

                    <div className="img-input">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleMultipleImages}
                      />
                    </div>
                  </div>

                  {/* <div className="video-box">
                    <div className="video-heading">
                      <h3>
                        Video <span>(Ratio 1:1)</span>
                      </h3>
                    </div>
                    <div className="video-input">
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideoFile(e.target.files[0])}

                        // onChange={(e) =>
                        //   setNewProduct({
                        //     ...newProduct,
                        //     video: e.target.files[0],
                        //   })
                        // }
                      />
                    </div>
                  </div> */}

                  <div className="description-box">
                    <div className="description-heading">
                      <h3>Tags</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.tags}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            tags: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-details-box">
              <div className="main-box">
                <div className="top-box">
                  <h2>Item Details</h2>
                </div>
                <div className="category-item-list">
                  <div className="price-box">
                    <div className="price-heading">
                      <h3>Brand Name</h3>
                    </div>
                    <div className="price-input h-10">
                      <input
                        type="text"
                        placeholder="Brand Name"
                        value={newProduct.brand}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            brand: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Category*</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Category</InputLabel>
                        <Select
                          value={newProduct.category || ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              category: e.target.value,
                            })
                          }
                        >
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
                    <div className="store-heading">
                      <h2>Sub Category</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Sub Category</InputLabel>
                        <Select
                          value={newProduct.subcategory || ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              subcategory: e.target.value,
                            })
                          }
                        >
                          {filteredSubCategories.map((sub, index) => (
                            <MenuItem key={index} value={sub.subCategoryName}>
                              {sub.subCategoryName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Pricing And Discounts</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Selling Price*</h3>
                      </div>
                      <div className="price-input h-10">
                        <input
                          type="text"
                          placeholder="Enter Price"
                          value={newProduct.sellingPrice}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              sellingPrice: e.target.value,
                              lastChanged: "selling",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Original Price</h3>
                      </div>
                      <div className="price-input h-10">
                        <input
                          type="text"
                          placeholder="Enter Price"
                          value={newProduct.originalPrice}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              originalPrice: e.target.value,
                              lastChanged: "original",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="category-item-list">
                      <div className="item-select-box">
                        <div className="price-heading">
                          <h3>Discount Type</h3>
                        </div>
                        <div className="select-menu">
                          <FormControl className="f-bg" size="small" fullWidth>
                            <InputLabel className="s-bg">Percentage</InputLabel>
                            <Select
                              value={newProduct.discountType || ""}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  discountType: e.target.value,
                                  lastChanged: "discountType",
                                })
                              }
                            >
                              <MenuItem value="percentage">Percentage</MenuItem>
                              <MenuItem value="amount">Amount</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Discount</h3>
                      </div>
                      <div className="price-input h-10">
                        <input
                          type="text"
                          placeholder="Discount value"
                          value={newProduct.discountValue}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              discountValue: e.target.value,
                              lastChanged: "discount",
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Stock And Availability</h2>
                  <div className="main-box">
                    <div className="flex flex-row gap-14 justify-between">
                      <div className="price-box">
                        <div className="stock-box">
                          <div className="price-heading">
                            <h3>Stock & Sizes</h3>
                          </div>

                          <div className="flex flex-row gap-2">
                            {/* Size input */}

                            {/* <input
                                type="text"
                                placeholder="Enter Size (e.g. M, L, XL)"
                                value={selectedSize}
                                onChange={(e) =>
                                  setSelectedSize(e.target.value)
                                }
                                className="p-2 border rounded"
                              /> */}
                            {sizeChart.length > 0 && (
                              <div className="price-input">
                                <div className="">
                                  {/* <h4 className="font-semibold mb-2">
                                    Available Sizes from Size Chart:
                                  </h4> */}
                                  <div className="flex gap-2 flex-wrap">
                                    {sizeChart.map((entry, index) => (
                                      <button
                                        key={index}
                                        onClick={(e) => {
                                          if (e?.preventDefault)
                                            e.preventDefault();
                                          setSelectedSize(entry.size);
                                        }}
                                        className="border px-3 py-1 rounded hover:bg-gray-200"
                                      >
                                        {entry.size}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Quantity input */}
                            <div className="price-input h-10">
                              <input
                                type="number"
                                placeholder="Enter Quantity"
                                value={sizeQuantity}
                                onChange={(e) =>
                                  setSizeQuantity(e.target.value)
                                }
                                className="p-2 border rounded"
                              />
                            </div>
                            {/* Add/Update button */}
                            <button
                              className="bg-gray-600 text-white text-xs h-10 w-24 rounded"
                              onClick={(e) => {
                                if (e?.preventDefault) e.preventDefault();
                                if (
                                  selectedSize.trim() !== "" &&
                                  sizeQuantity !== ""
                                ) {
                                  setNewProduct((prev) => ({
                                    ...prev,
                                    stock: {
                                      ...prev.stock,
                                      [selectedSize.trim()]:
                                        parseInt(sizeQuantity),
                                    },
                                  }));
                                  setSizeQuantity("");
                                  setSelectedSize("");
                                }
                              }}
                            >
                              Add Size Stock
                            </button>

                            <div className="ml-2">
                              <h4 className="font-semibold text-xs">
                                Current Size Stock:
                              </h4>
                              {Object.entries(newProduct.stock).map(
                                ([size, qty]) => (
                                  <div key={size}>
                                    {size}: {qty}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="price-box">
                        <div className="price-heading">
                          <h3>SEO & Key Words</h3>
                        </div>
                        <div className="price-input h-10">
                          <input
                            type="text"
                            placeholder=""
                            value={newProduct.seoKeywords}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                seoKeywords: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* <div className="category-item-list"> */}

                      {/* </div> */}
                      {/* <div className="flex flex-row"> */}
                      <div className="discount-box">
                        <div className="discount-heading">
                          <h3>Price Includes GST</h3>
                        </div>
                        <div className="price-input">
                          <div className="mx-2">
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={newProduct.taxIncluded}
                                  onChange={(e) =>
                                    setNewProduct({
                                      ...newProduct,
                                      taxIncluded: e.target.checked,
                                    })
                                  }
                                />
                              }
                            />
                          </div>
                          {newProduct.taxIncluded && (
                            <input
                              type="number"
                              placeholder="Enter GST %"
                              value={newProduct.taxValue || ""}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  taxValue: parseFloat(e.target.value) || 0,
                                })
                              }
                              className="border rounded ml-5 px-3 py-2 h-8 w-1/2"
                            />
                          )}
                        </div>
                      </div>

                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-details-box">
              <div className="main-box">
                <div className="top-box">
                  <h2>Shipping & Delivery Preferences</h2>
                </div>
                <div className="category-item-list">
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Return Policy</h2>
                    </div>
                    <div className="price-input">
                      <div className="mx-2">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.returnPolicy}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  returnPolicy: e.target.checked,
                                })
                              }
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Exchange Policy</h2>
                    </div>
                    <div className="price-input">
                      <div className="mx-2">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.exchangePolicy}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  exchangePolicy: e.target.checked,
                                })
                              }
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>SKU / Product Code</h2>
                    </div>
                    <div className="price-input h-10 flex flex-row gap-2">
                      <input
                        label="SKU / Product Code"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        placeholder="e.g., MEN-JEA"
                        sx={{ mb: 1 }}
                      />
                      <button
                        variant="outlined"
                        className="border-2 bg-blend-color border-b-gray-900 bg-slate-400 h-11 text-xs"
                        onClick={handleAutoGenerateSKU}
                        sx={{ textTransform: "none" }}
                      >
                        Auto-Generate SKU
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Additional Settings</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Visibility on App</h3>
                      </div>
                      <div className="price-input">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.newArrival}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct?.visibility,
                                    newArrival: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Show as New Arrival"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.trending}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct?.visibility,
                                    trending: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Show in Trending"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.hidden}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct.visibility,
                                    hidden: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Hide Product"
                        />
                      </div>
                    </div>

                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Custom Notes for Buyers</h3>
                      </div>
                      <div className="price-input h-10">
                        <input
                          type="text"
                          placeholder=""
                          value={newProduct.buyerNotes}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              buyerNotes: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box4">
              <div className="title-btn-box">
                <Button
                  className="subt-btn font-semibold text-slate-950"
                  type="submit"
                  onClick={(e) => handleAddOrUpdate(e, productToEdit?._id)}
                >
                  {productToEdit?._id ? "Update Product" : "Add Product"}
                </Button>
              </div>
            </div>
          </form>

          {isUploading && (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-full shadow">
                <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddNewItem;
