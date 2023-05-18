import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import store from "../../store/index";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {});

    return () => {
      unsubscribe();
    };
  }, []);
  const bgImage = () => {
    if (user?.avatar && user?.avatar.url) {
      return `url(${user.avatar.url})`;
    } else {
      return `url(https://icon-library.com/images/avatar-icon-images/avatar-icon-images-7.jpg)`;
    }
  };

  if (user) {
    return (
      <div className="sidebar-wrapper">
        <div className="header">Think Tank</div>
        <div className="user">
          <div className="avatar" style={{ backgroundImage: bgImage() }}></div>
          <div className="name">{`${user.firstName} ${user.lastName}`}</div>
        </div>
        <div className="links">
          <NavLink to="/dashboard" className="navlinks">
            <div className="link">Dashboard</div>
          </NavLink>
          <NavLink to="/account" className="navlinks">
            <div className="link">Account</div>
          </NavLink>
          <NavLink to="/my-quizzes" className="navlinks">
            <div className="link">My Quizzes</div>
          </NavLink>
          <NavLink to="/quizz-question-generator" className="navlinks">
            <div className="link">Question Generator</div>
          </NavLink>
          <NavLink to="/my-quizzes" className="navlinks">
            <div className="link">My quizzes</div>
          </NavLink>
          <NavLink to="/community-quizzes" className="navlinks">
            <div className="link">Community quizzes</div>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Sidebar;
