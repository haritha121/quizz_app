import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import UserLogin from "./UserLogin";
import "./Auth.css";
import store from "../../store/index";
import Toast from "../Toast/Toast";
import axios from "axios";

function Auth() {
  const [currentTab, setCurrentTab] = useState("signin");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    axios
      .post("/api/users/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          console.log("received token", res.data.token);
          store.dispatch({
            type: "login",
            _id: res.data.user._id,
            user: res.data.user,
            token: res.data.token,
          });
          navigate("/dashboard");
        } else {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      });
  };

  const handleSignUp = (firstName, lastName, email, password) => {
    console.log(firstName, lastName, email, password);
    axios
      .post("/api/users/register", { firstName, lastName, email, password })
      .then((res) => {
        if (res.data.success) {
          setCurrentTab("signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTabChange = () => {
    setCurrentTab(currentTab === "signin" ? "signup" : "signin");
  };

  return (
    <div className="auth-wrapper">
      <Toast
        model={showToast}
        message="Incorrect login"
        backgroundColor="#FF4539"
      />

      <div className="left">
        <img src="https://freesvg.org/img/chemist.png" alt="testimage" />
      </div>
      <div className="right">
        <div className="header">ThinkTank</div>
        <div className="sub-header">
          Where Minds Collide and Ideas Flourish!
        </div>
        {currentTab === "signin" ? (
          <UserLogin login={handleLogin} />
        ) : (
          <SignUp signup={handleSignUp} />
        )}
        <div className="new" onClick={handleTabChange}>
          {currentTab === "signup"
            ? "Open the Doors to Limitless Knowledge - Join ThinkTank Today!"
            : "Already a member? Login"}
        </div>
      </div>
    </div>
  );
}

export default Auth;
