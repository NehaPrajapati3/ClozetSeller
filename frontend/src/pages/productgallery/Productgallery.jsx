import React, { useState } from "react";
import "./productgallery.css";
import { Button } from "@mui/material";
import { useGetProducts } from "../files";
import { useSelector } from "react-redux";
import { selectProducts } from "../files";

const ProductGallery = () => {
  useGetProducts();
  const products = useSelector(selectProducts);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-gallery-section">
      <div className="gallery-header">
        <div className="gallery-top">
          <div className="gallery-top-heading">
            <div className="g-top-icon">
              <img src="./images/product.png" alt="" />
            </div>
            <div className="gallery-m-heading">
              <h2>Product Gallery</h2>
              <p>Search product and use its info to create your own product</p>
            </div>
          </div>
        </div>
        <div className="gallery-search">
          <div className="g-search-box">
            <div className="g-s-input">
              <input
                className="p-s-name"
                type="text"
                placeholder="Search by product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="show-list-product">
          <div className="show-list">
            <div className="show-list-head">
              <div className="gallery-m-heading">
                <h2>Product Gallery</h2>
                <p>search product and use its info to create own product</p>
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="p-s-detail">
                  <div className="show-box1">
                    <div className="boxa">
                      <div className="boxa-img">
                       
                         {product.imageUrls &&
                                product.imageUrls.length > 0 ? (
                                  <img
                                    src={product.imageUrls[0]} // Show the first image
                                    alt={product.name}

                                    className="w-150px h-120px rounded-sm object-cover ml-1"
                                  />
                                ) : (
                                  <span className="no-image">No Image</span>
                                )}
                       
                      </div>
                    </div>
                    <div className="boxa-info">
                      <div className="info-p-l">
                        <div className="info-1">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="info-1">
                          <h3>General Information</h3>
                        </div>
                        <div className="info-b">
                          <div className="info-c">
                            <span>Category :</span> <p>{product.category}</p>
                          </div>
                          <div className="info-c">
                            <span>Sub Category :</span>{" "}
                            <p>{product.subcategory}</p>
                          </div>
                          <div className="info-c">
                            <span>Brand Name :</span> <p>{product.brand}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="boxb-info">
                      <div className="available">
                        <h3>Available Variations</h3>
                      </div>
                    </div>
                    <div className="boxc-tag">
                      <div className="tags">
                        <Button>Use This Product Info</Button>
                        <h3>Tags</h3>
                        <p>{product.tags}</p>
                      </div>
                    </div>
                  </div>
                  <div className="show-box2">
                    <div className="descrip">
                      <h3>Description</h3>
                      <p>{product.shortDesc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
