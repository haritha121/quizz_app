import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="top">
          <div className="left">
            <div className="header">Statistics</div>
          </div>
          <div className="right">
            <div className="header">My Quizzes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
