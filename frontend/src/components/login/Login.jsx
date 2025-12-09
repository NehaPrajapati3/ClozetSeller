import React, { useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice.js";
import { auth } from "../firebase/firebase.js";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const autofillSeller = () => {
    setUser({
      email: "seller3@gmail.com",
      password: "123",
      role: "seller",
    });
  };

 


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("outside log in try{}");
    try {
      console.log("inside log in try{}");
      console.log(`React app api url:${import.meta.env.VITE_API_URL}`);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      navigate("/");

      console.log(res);
      dispatch(login(res.data));

      console.log(res.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="login-section">
        <div className="form-login">
          <form onSubmit={onSubmitHandler}>
            <div className="login-top">
              <div className="login-heading">
                <h2>Login Page</h2>
              </div>
            </div>
            <div className="part1">
              <div className="box1">
                <label>Email Address</label>
              </div>
              <div className="box2">
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="part1">
              <div className="box1">
                <label>Password</label>
              </div>
              <div className="box2">
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="part2">
              <button>Submit</button>
            </div>
            <div className="already text-center">
              <p>
                Don't you have account?<Link to="/register">Signup</Link>
              </p>
            </div>
            <div className="flex justify-center flex-col mt-4">
              <p className="text-center font-semibold">Auto-Fill Credentials</p>

              <div className="flex justify-center mt-2">
                <button
                  type="button"
                  onClick={autofillSeller}
                  className="btn btn-sm p-1 px-3 mx-2 hover:bg-green-500 hover:text-white bg-green-400 
                 transition-all border rounded-md border-slate-700"
                >
                  Autofill Seller
                </button>

               
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
