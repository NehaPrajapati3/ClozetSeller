import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { login as authLogin } from "../useFiles";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Sign up page");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/signup`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(authLogin(user));
        navigate("/login");
        toast.success(res.data.message);
      }

      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    });
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   const user = auth.currentUser;
    //   console.log(user);
    //   if (user) {
    //     await setDoc(doc(db, "Users", user.uid), {
    //       email: user.email,
    //       firstName: firstName,
    //       lastName: lastName,
    //       photo:""
    //     });
    //   }
    //   console.log("User Registered Successfully!!");
    //   toast.success("User Registered Successfully!!", {
    //     position: "top-center",
    //   });
    //   dispatch(authLogin(user));

    //   navigate("/login")
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error(error.message, {
    //     position: "bottom-center",
    //   });
    // }
  };
  return (
    <>
      <div className="signup-section">
        <div className="form-signup">
          <form onSubmit={handleRegister}>
            <div className="form-top">
              <div className="form-heading">
                <h2>Register Form</h2>
              </div>
            </div>
            <div className="part1">
              <div className="box1">
                <label>First Name</label>
              </div>
              <div className="box2">
                <input
                  type="text"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="part1">
              <div className="box1">
                <label>Last Name</label>
              </div>
              <div className="box2">
                <input
                  type="text"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  placeholder="Enter Last Name"
                />
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
                  placeholder="Enter Your Eamil"
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
                Already have an account. <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
