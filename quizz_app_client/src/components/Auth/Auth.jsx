import React, { useState } from "react";
import SignUp from "./SignUp";
import UserLogin from "./UserLogin";
import "./Auth.css";

function Auth() {
  const [currenTab, setCurrentTab] = useState("signin");
  const handleLogin = (email, password) => {
    console.log(email, password);
  };
  const handleSignUp = (firstName, lastName, email, password) => {
    console.log(firstName, lastName, email, password);
  };
  return (
    <div className="auth-wrapper">
      <div className="left">
        <img src="https://freesvg.org/img/chemist.png" alt="testimage" />
      </div>
      <div className="right">
        <div className="header">Quiz Itt</div>
        <div className="sub-header">Welcome to Quizz Itt</div>
        {currenTab === "signin" ? (
          <UserLogin login={handleLogin} />
        ) : (
          <SignUp signup={handleSignUp} />
        )}
        <div className="new" onClick={() => setCurrentTab("signup")}>
          New to Quizz Itt? SignUp here
        </div>
      </div>
    </div>
  );
}

export default Auth;
