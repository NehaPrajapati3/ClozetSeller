import React, { useState, useEffect } from "react";
import "./myshop.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@mui/material";

const MyShop = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  let storeToEdit;

  const [newStore, setNewStore] = useState({
    name: storeToEdit?.name || "",
    address: storeToEdit?.address || "",
    phoneNo: storeToEdit?.phoneNo || "",

    logo: storeToEdit?.logo || "", // Updated to handle logo
    coverPhoto: storeToEdit?.coverPhoto || "",
  });

  useEffect(() => {
    if (storeToEdit) {
      setNewStore({
        ...newStore,
        name: storeToEdit.name || "",
        address: storeToEdit.address || "",
        phoneNo: storeToEdit.phoneNo || "",
        logo: storeToEdit.logo || "",
        coverPhoto: storeToEdit.coverPhoto || "",
      });
    }
  }, [storeToEdit]);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in newStore) {
        formData.append(key, newStore[key]);
      }

      // Add logo file if selected
      if (logoFile) {
        formData.append("logo", logoFile);
      }

      // Add coverPhoto file if selected
      if (coverPhotoFile) {
        formData.append("coverPhoto", coverPhotoFile);
      }

      let res;
      if (storeToEdit?._id) {
        // Update store
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/store/edit/${
            storeToEdit._id
          }`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        // Add new store
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/store/add`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
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
    setNewStore({
      name: "",
      address: "",
      phoneNo: "",
      logo: "",
      coverPhoto: "",
    });
  };

  return (
    <>
      <div className="myshop-section">
        <form
          className="myshop-section"
          action=""
          encType="multipart/form-data"
          onSubmit={handleAddOrUpdate}
        >
          <div className="myshop-header">
            <div className="myshop-detail">
              <div className="myshop-form">
                <div className="form-part1">
                  <div className="n-heading">
                    <h3>Name (Default)</h3>
                  </div>
                  <div className="n-input">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={newStore.name}
                      onChange={(e) =>
                        setNewStore({ ...newStore, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-part2">
                  <div className="n-heading">
                    <h3>Address (Default)</h3>
                  </div>
                  <div className="n-input">
                    <textarea
                      id=""
                      placeholder="Enter Shop Area"
                      value={newStore.address}
                      onChange={(e) =>
                        setNewStore({ ...newStore, address: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="form-part3">
                  <div className="n-heading">
                    <h3>Contact number*</h3>
                  </div>
                  <div className="n-input">
                    <input
                      type="number"
                      placeholder="Enter Mobile Number"
                      value={newStore.phoneNo}
                      onChange={(e) =>
                        setNewStore({ ...newStore, phoneNo: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-box">
              <div className="upload-logo-left">
                <div className="up-logo-top">
                  <div className="up-logo-heading">
                    <h3>Upload Logo</h3>
                  </div>
                </div>
                <div className="up-img">
                  <div className="img-real">
                    <input
                      name="logo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setLogoFile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              <div className="upload-logo-right">
                <div className="up-logo-top">
                  <div className="up-logo-heading">
                    <h3>Upload Cover Photo(Ratio 2:1)</h3>
                  </div>
                </div>
                <div className="up-img">
                  <div className="img-real">
                    <input
                      name="coverPhoto"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setCoverPhotoFile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="title-btn-box flex   pr-10">
              <Button
                className="subt-btn font-semibold text-slate-950"
                type="submit"
              >
                Save Store
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default MyShop;
