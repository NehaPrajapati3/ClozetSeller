import React, { useState, useEffect } from "react";
import "./addnewemployee.css";
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, InputLabel } from "@mui/material";
import Footer from "../footer/footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const AddNewEmployee = () => {
  const location = useLocation();
  const employeeToEdit = location.state?.employee || null;
  const [imageFile, setImageFile] = useState(null);

  const [newemployee, setNewemployee] = useState({
    firstName: employeeToEdit?.firstName || "",
    lastName: employeeToEdit?.lastName || "",
    phone: employeeToEdit?.phone || "",
    role: employeeToEdit?.role || "",
    email: employeeToEdit?.email || "",
    password: employeeToEdit?.password || "",
    confirmPassword: employeeToEdit?.confirmPassword || "",
    image: employeeToEdit?.image || "",
  });

  useEffect(() => {
    if (employeeToEdit) {
      setNewemployee({
        ...newemployee,
        firstName: employeeToEdit.firstName || "",
        lastName: employeeToEdit.lastName || "",
        phone: employeeToEdit.phone || "",
        role: employeeToEdit.role || "",
        email: employeeToEdit.email || "",
        password: employeeToEdit.password || "",
        confirmPassword: employeeToEdit.confirmPassword || "",
        image: employeeToEdit.image || "",
      });
    }
  }, [employeeToEdit]);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in newemployee) {
        formData.append(key, newemployee[key]);
      }

      // Add image file if selected
      if (imageFile) {
        formData.append("image", imageFile);
      }
      let res;
      if (employeeToEdit?._id) {
        // Update employee
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/employee/editEmployee/${
            employeeToEdit._id
          }`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        // Add new employee
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/employee/addEmployee`,
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
    setNewemployee({
      firstName: "",
      lastName: "",
      phone: "",
      role: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    });

    setImageFile(null);
  };

  return (
    <>
      <div className="addnew-employee-section">
        <div className="addnew-employee-header">
          <div className="addnew-e-top">
            <div className="addnew-e-heading">
              <div className="addnew-e-icon">
                <LuUserRoundCog />
              </div>
              <h2>Add New Employee</h2>
            </div>
          </div>
          <div className="e-genral-info-box">
            <form
              action=""
              encType="multipart/form-data"
              onSubmit={(e) => handleAddOrUpdate(e)}
            >
              <div className="e-genral-info">
                <div className="e-genral-info-top">
                  <div className="e-genral-heading">
                    <div className="e-genral-icon">
                      <RiUserFill />
                    </div>
                    <h3>Genral Information</h3>
                  </div>
                </div>
                <div className="addnew-e-form-box">
                  <div className="addnew-left">
                    <div className="addnew-input-box">
                      <div className="boxf">
                        <InputLabel>First Name</InputLabel>
                      </div>
                      <div className="add-input">
                        <input
                          type="text"
                          placeholder=" "
                          value={newemployee.firstName}
                          onChange={(e) =>
                            setNewemployee({
                              ...newemployee,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="addnew-input-box">
                      <div className="boxf">
                        <InputLabel>Last Name</InputLabel>
                      </div>
                      <div className="add-input">
                        <input
                          type="text"
                          placeholder=" Ex: Sakeel Ameer"
                          value={newemployee.lastName}
                          onChange={(e) =>
                            setNewemployee({
                              ...newemployee,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="addnew-input-box">
                      <div className="boxp">
                        <InputLabel>Phone</InputLabel>
                      </div>
                      <div className="add-input">
                        <input
                          type="text"
                          placeholder=" Ex: 1113*****"
                          value={newemployee.phone}
                          onChange={(e) =>
                            setNewemployee({
                              ...newemployee,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="addnew-input-box">
                      <div className="boxp">
                        <InputLabel>Role</InputLabel>
                      </div>
                      <div className="add-inputs">
                        <div className="select-menu">
                          <FormControl className="f-bg" size="large" fullWidth>
                            <InputLabel className="s-bg">
                              Select Role
                            </InputLabel>
                            <Select
                              value={newemployee.role}
                              onChange={(e) =>
                                setNewemployee({
                                  ...newemployee,
                                  role: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="">None</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addnew-right">
                    <div className="employee-image">
                      <div className="image-e-top">
                        <h4>Employee Image Ratio (1:1)</h4>
                      </div>
                      <div className="image-show-box">
                        <div className="image-show"></div>
                      </div>
                      <div className="image-size">
                        <div className="image-size-heading">
                          <h4>Employee Image Size Max 2 MB *</h4>
                        </div>
                        <div className="image-choose">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-info">
                  <div className="account-epp-info">
                    <div className="account-epp-top">
                      <div className="epp-heading">
                        <div className="epp-icon">
                          <RiUserFill />
                        </div>
                        <h3>Account Information</h3>
                      </div>
                    </div>
                    <div className="e-p-c">
                      <div className="e-box">
                        <div className="e-InputLabel">
                          <InputLabel>Email</InputLabel>
                        </div>
                        <div className="e-input">
                          <input
                            type="email"
                            placeholder="Ex: exa@gmail.com"
                            value={newemployee.email}
                            onChange={(e) =>
                              setNewemployee({
                                ...newemployee,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="e-box">
                        <div className="e-InputLabel">
                          <InputLabel>Password</InputLabel>
                          {/* <div className="pass-war-icon">
                              <PiWarningCircleBold />
                            </div> */}
                        </div>
                        <div className="e-input">
                          <input
                            type="password"
                            placeholder="Ex: exa@gmail.com"
                            value={newemployee.password}
                            onChange={(e) =>
                              setNewemployee({
                                ...newemployee,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="e-box">
                        <div className="e-InputLabel">
                          <InputLabel>Confirm Password</InputLabel>
                        </div>
                        <div className="e-input">
                          <input
                            type="password"
                            placeholder="Ex: exa@gmail.com"
                            value={newemployee.confirmPassword}
                            onChange={(e) =>
                              setNewemployee({
                                ...newemployee,
                                confirmPassword: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="srbtn-box">
                      <div className="r1btn">
                        <Button className="rst-btn">Reset</Button>
                        <Button className="subt-btn" type="submit">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default AddNewEmployee;
