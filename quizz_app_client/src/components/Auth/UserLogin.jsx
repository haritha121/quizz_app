import React, { useState } from "react";

function UserLogin(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="sign-in-wrapper">
      <div className="form">
        <div className="input-wrapper">
          <div>Email Address</div>
          <input
            className="input"
            type="email"
            placeholder="Email Id"
            value={userEmail}
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <div>Password</div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={userPassword}
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button
          className="btn"
          onClick={() => props.login(userEmail, userPassword)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default UserLogin;
