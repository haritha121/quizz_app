import React, { useState } from "react";

function SignUp(props) {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password } = userDetails;
    props.signup(firstName, lastName, email, password);
  };
  return (
    <div className="sign-in-wrapper">
      <div className="form">
        <div className="input-wrapper">
          <div className="labels">First Name</div>
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userDetails.firstName}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-wrapper">
          <div className="labels">Last Name</div>
          <input
            className="input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userDetails.lastName}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-wrapper">
          <div className="labels">Email Address</div>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Id"
            value={userDetails.email}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-wrapper">
          <div className="labels">Password</div>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
